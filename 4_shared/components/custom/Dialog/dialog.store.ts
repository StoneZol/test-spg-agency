"use client";

import { useSyncExternalStore } from "react";

import type { DialogState, OpenDialogOptions } from "./Dialog.types";

const initialState: DialogState = {
    isOpen: false,
    content: null,
};

let state: DialogState = initialState;
const listeners = new Set<() => void>();

const emit = () => {
    listeners.forEach((listener) => listener());
};

export const openDialog = ({ content }: OpenDialogOptions) => {
    state = {
        isOpen: true,
        content,
    };
    emit();
};

export const closeDialog = () => {
    if (!state.isOpen) {
        return;
    }

    state = {
        ...state,
        isOpen: false,
    };
    emit();
};

export const resetDialog = () => {
    if (state.isOpen) {
        return;
    }

    state = initialState;
    emit();
};

const subscribe = (listener: () => void) => {
    listeners.add(listener);

    return () => {
        listeners.delete(listener);
    };
};

const getSnapshot = () => state;

const getServerSnapshot = () => initialState;

export const useDialogStore = () =>
    useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
