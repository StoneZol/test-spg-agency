'use client';
import { OrderCallButtonProps } from './OrderCallButton.types';
import styles from './OrderCallButton.module.scss';
import { Button, HoverRiseText, openDialog } from '@/4_shared/components/custom';
import OrderCallForm from '@/3_entities/OrderCallForm/OrderCallForm';

const OrderCallButton = ({ }: OrderCallButtonProps) => {
    return (
        <Button variant="outline" className={styles.order_call_button} onClick={() => openDialog({ content: <OrderCallForm /> })}>
            <HoverRiseText>ЗАКАЗАТЬ ЗВОНОК </HoverRiseText>
        </Button>
    );
};

export default OrderCallButton;