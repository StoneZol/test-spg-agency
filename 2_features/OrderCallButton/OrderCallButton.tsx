'use client';

import CPhoneIcon from '@/4_shared/components/icons/CPhoneIcon';
import { Button, HoverRiseText, openDialog } from '@/4_shared/components/custom';
import OrderCallForm from '@/3_entities/OrderCallForm/OrderCallForm';

import styles from './OrderCallButton.module.scss';
import { OrderCallButtonProps } from './OrderCallButton.types';

const OrderCallButton = ({ }: OrderCallButtonProps) => {
    return (
        <Button
            variant="outline"
            className={styles.order_call_button}
            aria-label="Заказать звонок"
            onClick={() => openDialog({ content: <OrderCallForm /> })}
        >
            <span className={styles.order_call_button_text}>
                <HoverRiseText>ЗАКАЗАТЬ ЗВОНОК </HoverRiseText>
            </span>
            <CPhoneIcon className={styles.order_call_button_icon} aria-hidden />
        </Button>
    );
};

export default OrderCallButton;
