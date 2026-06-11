import { DescriptionTextProps } from './DescriptionText.types';
import styles from './DescriptionText.module.scss';
import { cn } from '@/4_shared/lib/utils';

const descriptionTextVariants = (size: DescriptionTextProps['size']) => {
    switch (size) {
        case 'small':
            return styles.descriptionText_small;
        case 'medium':
            return styles.descriptionText_medium;
    }
}
const DescriptionText = ({ leftText, rightText,
    size = 'medium',
    leftIsAccent = false,
    rightIsAccent = false,
    isNewLine = false }: DescriptionTextProps) => {
    return (
        <p className={cn(styles.descriptionText, descriptionTextVariants(size))}>
            {
                leftText && (
                    <span className={cn(styles.leftText, leftIsAccent && styles.accent_text)}>{leftText}</span>
                )
            }
            {
                isNewLine ? <br /> : <> {' '} </>

            }
            {
                rightText && (
                    <span className={cn(styles.rightText, rightIsAccent && styles.accent_text)}>{rightText}</span>
                )
            }
        </p>
    );
};

export default DescriptionText;