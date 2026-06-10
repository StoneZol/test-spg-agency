'use client';

import Link from 'next/link';
import { Controller } from 'react-hook-form';

import { Button } from '@/4_shared/components/custom';
import { Input } from '@/4_shared/components/custom/Input';

import { useOrderCallForm } from './OrderCallForm.hooks';
import styles from './OrderCallForm.module.scss';

const OrderCallForm = () => {
    const { form, onSubmit, getPhoneFieldProps } = useOrderCallForm();

    return (
        <form className={styles.order_call_form} onSubmit={onSubmit}>
            <h2 className={styles.order_call_form_title}>Заказать звонок</h2>
            <div className={styles.order_call_form_inputs}>
                <Input id="name" placeholder="Ваше имя" {...form.register('name')} />
                <Controller
                    name="phone"
                    control={form.control}
                    render={({ field }) => <Input {...getPhoneFieldProps(field)} />}
                />
                <Input id="email" placeholder="E-MAIL" {...form.register('email')} />
            </div>

            <div className={styles.order_call_form_buttons}>
                <p className={styles.order_call_form_policy}>
                    Нажимая на кнопку «Отправить», вы ознакомлены <br /> и подтверждаете согласие с
                    {' '}
                    <Link href="/policy" className={styles.order_call_form_policy_link}>
                        политикой обработки персональных данных
                    </Link>
                </p>
                <Button type="submit" className={styles.order_call_form_button}>Отправить</Button>
            </div>
        </form>
    );
};

export default OrderCallForm;
