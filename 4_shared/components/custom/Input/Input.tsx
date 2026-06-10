import { cn } from "@/4_shared/lib/utils/cn";

import { InputProps } from "./Input.types";
import styles from "./Input.module.scss";

const Input = ({ id, placeholder, className, ...props }: InputProps) => {
    return (
        <div className={styles.input_box}>
            <input
                type="text"
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
};

export default Input;
