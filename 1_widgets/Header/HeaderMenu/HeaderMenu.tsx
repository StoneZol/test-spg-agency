'use client';
import { HeaderMenuProps } from './HeaderMenu.types';
import styles from './HeaderMenu.module.scss';
import { CBurgerIcon } from '@/4_shared/components/icons/CBurgerIcon';
import { useId } from 'react';

const HeaderMenu = ({ }: HeaderMenuProps) => {
    const id = useId();
    return (
        <div className={styles.menu_button_box}>
            <button id={id}>
                <CBurgerIcon />
            </button>
            <label htmlFor={id} className={styles.menu_label}>
                МЕНЮ
            </label>
        </div>
    );
};

export default HeaderMenu;