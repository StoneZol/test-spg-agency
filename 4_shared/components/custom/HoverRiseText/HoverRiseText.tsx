import { cn } from "@/4_shared/lib/utils/cn";

import { HoverRiseTextProps } from "./HoverRiseText.types";

const HoverRiseText = ({ children, className }: HoverRiseTextProps) => {
    const text = String(children);

    return (
        <span className={cn("hover-rise-text", className)}>
            <span className="hover-rise-text__item">{text}</span>
            <span className="hover-rise-text__item" aria-hidden="true">
                {text}
            </span>
        </span>
    );
};

export default HoverRiseText;
