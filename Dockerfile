FROM node:24-alpine AS builder
WORKDIR /app


# Аргументы для сборки
ARG NEXT_PUBLIC_SITE_URL

ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
# Копирование package.json и package-lock.json
COPY package.json .
COPY package-lock.json .

# Установка зависимостей
RUN npm ci

# Копирование остальных файлов
COPY . .

# Сборка приложения
RUN npm run build

# Результаты сборки
FROM node:24-alpine AS runner

WORKDIR /app

# Устанавливаем только необходимые системные пакеты
RUN apk add --no-cache dumb-init

# Создаем пользователя
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Копируем ТОЛЬКО standalone сервер из builder этапа
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static/
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Переключаемся на непривилегированного пользователя
USER nextjs

# Экспонируем порт
# EXPOSE 4000

# Переменные окружения для runtime
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL

# Запускаем сервер
ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "server.js"]
