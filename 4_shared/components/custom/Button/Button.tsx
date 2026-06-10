import { ButtonProps } from './Button.types';
import styles from './Button.module.scss';
import { cn } from '@/4_shared/lib/utils';

const buttonVariants = (variant: ButtonProps['variant']) => {
    switch (variant) {
        case 'default':
            return styles.button_default;
        case 'outline':
            return styles.button_outline;
        default:
            return styles.button_default;
    }
}

const Button = ({ children, className, variant = 'default', ...props }: ButtonProps) => {
    return (
        <button className={cn(styles.button, buttonVariants(variant), className)} {...props}>
            {children}
        </button>
    );
};

export default Button;