export type ButtonProps = {
    children?: React.ReactNode;
    className?: string;
    variant?: 'default' | 'outline'
} & React.ButtonHTMLAttributes<HTMLButtonElement>;