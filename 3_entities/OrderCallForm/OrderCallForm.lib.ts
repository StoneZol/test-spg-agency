const PHONE_DIGITS_LENGTH = 10;

export const EMPTY_PHONE_MASK = "+7 (___) ___-__-__";

const MASK_DIGIT_POSITIONS = [4, 5, 6, 9, 10, 11, 13, 14, 16, 17] as const;

export const extractPhoneDigits = (value: string) => {
    let digits = value.replace(/\D/g, "");

    if (digits.startsWith("7") || digits.startsWith("8")) {
        digits = digits.slice(1);
    }

    return digits.slice(0, PHONE_DIGITS_LENGTH);
};

export const applyPhoneMask = (digits: string) => {
    const chars = EMPTY_PHONE_MASK.split("");

    MASK_DIGIT_POSITIONS.forEach((position, index) => {
        chars[position] = digits[index] ?? "_";
    });

    return chars.join("");
};

export const formatPhoneMask = (value: string) => {
    return applyPhoneMask(extractPhoneDigits(value));
};

export const handlePhoneInput = (value: string) => {
    const digits = extractPhoneDigits(value);

    return {
        maskedValue: applyPhoneMask(digits),
        caretPosition: getPhoneCaretPosition(digits.length),
    };
};

export const removePhoneDigitOnBackspace = (
    maskedValue: string,
    cursor: number,
    selectionEnd: number
) => {
    if (cursor !== selectionEnd) {
        const nextValue = maskedValue.slice(0, cursor) + maskedValue.slice(selectionEnd);

        return handlePhoneInput(nextValue);
    }

    const digits = extractPhoneDigits(maskedValue);

    if (!digits.length) {
        return {
            maskedValue: EMPTY_PHONE_MASK,
            caretPosition: MASK_DIGIT_POSITIONS[0],
        };
    }

    let slotIndex = MASK_DIGIT_POSITIONS.findIndex((position) => position >= cursor);

    if (slotIndex === -1) {
        slotIndex = MASK_DIGIT_POSITIONS.length - 1;
    }

    const charAtSlot = maskedValue[MASK_DIGIT_POSITIONS[slotIndex]];
    const newLength = /\d/.test(charAtSlot) ? slotIndex : Math.max(0, slotIndex - 1);
    const newDigits = digits.slice(0, newLength);

    return {
        maskedValue: applyPhoneMask(newDigits),
        caretPosition: getPhoneCaretPosition(newDigits.length),
    };
};

export const getPhoneCaretPosition = (digitsCount: number) => {
    if (digitsCount <= 0) {
        return MASK_DIGIT_POSITIONS[0];
    }

    if (digitsCount >= PHONE_DIGITS_LENGTH) {
        return MASK_DIGIT_POSITIONS[PHONE_DIGITS_LENGTH - 1] + 1;
    }

    return MASK_DIGIT_POSITIONS[digitsCount];
};

export const hasPhoneDigits = (value: string) => extractPhoneDigits(value).length > 0;

export const parsePhoneToRaw = (value: string) => {
    const digits = extractPhoneDigits(value);

    return digits.length === PHONE_DIGITS_LENGTH ? `+7${digits}` : "";
};

export const isPhoneComplete = (value: string) => extractPhoneDigits(value).length === PHONE_DIGITS_LENGTH;
