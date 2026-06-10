import { cn } from "@/4_shared/lib/utils/cn";

import styles from "./CBurgerIcon.module.scss";

const CBurgerIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            className={cn(styles.icon, className)}
            width="38"
            height="17"
            viewBox="0 0 38 17"
            fill="none"
            overflow="visible"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <rect className={styles.lineTop} width="37.911" height="2" fill="#2F80ED" />
            <rect className={styles.lineMiddle} x="0.0585938" y="7" width="37.911" height="2" fill="#2F80ED" />
            <rect className={styles.lineBottom} x="0.0898438" y="15" width="37.911" height="2" fill="#2F80ED" />
        </svg>
    );
};

export default CBurgerIcon;
