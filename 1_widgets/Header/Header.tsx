
import styles from './Header.module.scss';
import { Button, HoverRiseText } from '@/4_shared/components/custom';
import LogoIcon from '@icons/LogoIcon';
import { HeaderMenu } from './HeaderMenu';
import OrderCallButton from '@/2_features/OrderCallButton/OrderCallButton';

const Header = () => {
    return (
        <header className={styles.header}>
            <HeaderMenu />
            <Button className={styles.header_select}><HoverRiseText>ВЫБРАТЬ КВАРТИРУ \/</HoverRiseText></Button>
            <div className={styles.header_logo}><LogoIcon /></div>
            <a href="tel:+74955272121" className={styles.header_contacts}>+7 495 527 21 21</a>
            <OrderCallButton />
        </header>
    );
};

export default Header;