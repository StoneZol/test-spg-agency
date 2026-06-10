import { forwardRef } from "react";

import { cn } from "@/4_shared/lib/utils/cn";

import { InputProps } from "./Input.types";
import styles from "./Input.module.scss";

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ id, placeholder, className, type = "text", ...props }, ref) => {
        return (
            <div className={styles.input_box}>
                <input
                    ref={ref}
                    type={type}
                    id={id}
                    placeholder=" "
                    className={cn(styles.input_field, className)}
                    {...props}
                />
                <label htmlFor={id} className={styles.input_label}>
                    {placeholder.toUpperCase()}
                </label>
            </div>
        );
    }
);

Input.displayName = "Input";

export default Input;
