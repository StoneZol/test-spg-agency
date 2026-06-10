"use client";

import { useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence } from "motion/react";

import { closeDialog, resetDialog, useDialogStore } from "./dialog.store";
import { DialogProviderProps } from "./Dialog.types";
import Dialog from "./Dialog";

const subscribe = () => () => {};

const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export const DialogProvider = ({ children }: DialogProviderProps) => {
    const { isOpen, content } = useDialogStore();
    const mounted = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);

    return (
        <>
            {children}
            {mounted &&
                createPortal(
                    <AnimatePresence onExitComplete={resetDialog}>
                        {isOpen && content && (
                            <Dialog key="dialog" onClose={closeDialog}>
                                {content}
                            </Dialog>
                        )}
                    </AnimatePresence>,
                    document.body
                )}
        </>
    );
};
