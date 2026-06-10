import type { ReactNode } from "react";

export type OpenDialogOptions = {
    content: ReactNode;
};

export type DialogState = {
    isOpen: boolean;
    content: ReactNode | null;
};

export type DialogUIProps = {
    children: ReactNode;
    onClose: () => void;
};

export type DialogProviderProps = {
    children: ReactNode;
};
