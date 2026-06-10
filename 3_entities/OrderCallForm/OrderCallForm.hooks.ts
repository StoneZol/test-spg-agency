import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useForm, type ControllerRenderProps } from "react-hook-form";

import {
    EMPTY_PHONE_MASK,
    getPhoneCaretPosition,
    handlePhoneInput,
    hasPhoneDigits,
    removePhoneDigitOnBackspace,
} from "./OrderCallForm.lib";
import { OrderCallFormSchema, type OrderCallFormSchemaType } from "./OrderCallForm.types";

const setCaretPosition = (input: HTMLInputElement, position: number) => {
    requestAnimationFrame(() => {
        input.setSelectionRange(position, position);
    });
};

export const useOrderCallForm = () => {
    const form = useForm<OrderCallFormSchemaType>({
        resolver: zodResolver(OrderCallFormSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
        },
    });

    const onSubmit = form.handleSubmit(
        (data) => console.log(data),
        (errors) => console.log(errors)
    );

    const getPhoneFieldProps = useCallback(
        (field: ControllerRenderProps<OrderCallFormSchemaType, "phone">) => ({
            id: "phone",
            placeholder: "Телефон",
            type: "tel" as const,
            inputMode: "tel" as const,
            autoComplete: "tel",
            value: field.value,
            ref: field.ref,
            onFocus: (event: React.FocusEvent<HTMLInputElement>) => {
                if (!field.value) {
                    field.onChange(EMPTY_PHONE_MASK);
                    setCaretPosition(event.target, getPhoneCaretPosition(0));
                }
            },
            onBlur: () => {
                field.onBlur();

                if (!hasPhoneDigits(field.value)) {
                    field.onChange("");
                }
            },
            onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => {
                if (event.key !== "Backspace") {
                    return;
                }

                event.preventDefault();

                const input = event.currentTarget;
                const cursor = input.selectionStart ?? 0;
                const selectionEnd = input.selectionEnd ?? cursor;
                const { maskedValue, caretPosition } = removePhoneDigitOnBackspace(
                    field.value || EMPTY_PHONE_MASK,
                    cursor,
                    selectionEnd
                );

                field.onChange(maskedValue);
                setCaretPosition(input, caretPosition);
            },
            onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                const { maskedValue, caretPosition } = handlePhoneInput(event.target.value);

                field.onChange(maskedValue);
                setCaretPosition(event.target, caretPosition);
            },
        }),
        []
    );

    return {
        form,
        onSubmit,
        getPhoneFieldProps,
    };
};
