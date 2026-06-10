"use client";

import { useEffect } from "react";

import CloseIcon from "@icons/СCloseIcon";

import { motion } from "motion/react";

import { DialogUIProps } from "./Dialog.types";
import styles from "./Dialog.module.scss";

const Dialog = ({ children, onClose }: DialogUIProps) => {
    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [onClose]);

    return (
        <motion.div
            className={styles.dialog}
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <button
                type="button"
                className={styles.dialog_close}
                aria-label="Закрыть"
                onClick={onClose}
            >
                <CloseIcon />
            </button>
            <div className={styles.dialog_content}>
                <div className={styles.dialog_body}>{children}</div>
            </div>
        </motion.div>
    );
};

export default Dialog;
