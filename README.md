# INCHAPIN

Демо-страница жилого комплекса бизнес-класса. Тестовое задание Sempro Group.

## Стек

- Next.js 16 (App Router) + TypeScript
- SCSS Modules
- react-hook-form + zod
- react-select, smooth-scrollbar, motion

## Запуск

```bash
npm install
npm run dev
```

Открыть [http://localhost:3000](http://localhost:3000).

Продакшен-сборка:

```bash
npm run build
npm start
```

Docker:

```bash
docker-compose build
docker-compose up
```

## Переменные окружения

```env
NEXT_PUBLIC_SITE_URL=https://example.com
```

Используется для canonical, Open Graph и JSON-LD.

## Структура

```
app/              — роутинг, layout, главная страница
1_widgets/        — Header
2_features/       — OrderCallButton, VideoPlay
3_entities/       — OrderCallForm
4_shared/         — UI-kit, иконки, провайдеры, SEO (SetJsonLD)
```

## Брейкпоинты

| # | Ширина |
|---|--------|
| 1 | 0–767px |
| 2 | 768–1023px |
| 3 | 1024–1280px |
| 4 | 1281–1769px (база) |
| 5 | 1770px+ |

## Реализовано

- 2 экрана, адаптив на 5 брейках
- Фиксированная шапка со smooth-scroll
- Модалка «Заказать звонок» (форма, маска телефона, ESC)
- react-select в шапке
- Видео на полный экран
- Hover-эффекты, JSON-LD и meta-теги
