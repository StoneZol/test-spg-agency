import z from "zod";

import { isPhoneComplete, parsePhoneToRaw } from "./OrderCallForm.lib";

export const OrderCallFormSchema = z.object({
    name: z.string().min(1),
    phone: z
        .string()
        .min(1, "Введите телефон")
        .superRefine((value, ctx) => {
            if (!isPhoneComplete(value)) {
                ctx.addIssue({
                    code: "custom",
                    message: "Введите номер в формате +7 (999) 999-99-99",
                });
            }
        })
        .transform((value) => parsePhoneToRaw(value)),
    email: z.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Введите корректный email"),
});

export type OrderCallFormSchemaType = z.infer<typeof OrderCallFormSchema>;