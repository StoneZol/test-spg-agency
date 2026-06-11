"use client";

import { useId } from "react";

export const useSelectInstanceId = (instanceId?: string | number) => {
    const generatedId = useId();

    return instanceId ?? generatedId;
};
