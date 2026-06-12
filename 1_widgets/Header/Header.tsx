import styles from './Header.module.scss';
import LogoIcon from '@icons/LogoIcon';
import { HeaderMenu } from './HeaderMenu';
import { HeaderApartmentSelect } from './HeaderApartmentSelect';
import OrderCallButton from '@/2_features/OrderCallButton/OrderCallButton';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header_content}>
                <HeaderMenu />
                <HeaderApartmentSelect />
                <div className={styles.header_logo}><LogoIcon /></div>
                <a href="tel:+74955272121" className={styles.header_contacts}>+7 495 527 21 21</a>
                <OrderCallButton />
            </div>
        </header>
    );
};

export default Header;