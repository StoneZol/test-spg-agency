import { DescriptionText } from "@/4_shared/components/custom/DescriptionText";
import { CInchapin } from "@/4_shared/components/icons/CInchapin";
import Image from "next/image";
import styles from './page.module.scss';
import Logo2MiniIcon from "@/4_shared/components/icons/Logo2MiniIcon";
import { VideoPlay } from "@/2_features/VideoPlay";

export default function Home() {
    return (
        <div className={styles.home}>
            <section className={styles.hero}>
                <div className={styles.hero_image}><Image src="/hero.webp" alt="image" width={1760} height={600} /></div>
                <div className={styles.hero_content}>
                    <DescriptionText
                        leftText="Дом бизнес-класса"
                        rightText="Для ценителей роскоши"
                        size="medium"
                        leftIsAccent={true}
                        rightIsAccent={true}
                        isNewLine={true}
                    />
                    <div><CInchapin /></div>
                </div>
            </section>
            <section className={styles.pr}>
                <div className={styles.pr_left}>
                    <div className={styles.pr_left_title}>О проекте</div>
                    <div className={styles.pr_left_image}>
                        <Image src='/section2.webp' alt='image' width={733} height={900} />
                        <Logo2MiniIcon className={styles.pr_left_image_logo} />
                    </div>
                </div>
                <div className={styles.pr_right}>
                    <div className={styles.pr_right_description_box}>
                        <div className={styles.pr_right_bibka} />
                        <DescriptionText
                            leftText="уютное и безопасное пространство для счастливой,"
                            rightText="спокойной и размеренной жизни"
                            size="medium"
                            leftIsAccent={false}
                            rightIsAccent={true}
                            isNewLine={true}
                        />
                        <DescriptionText
                            leftText="Квартиры от 65 до 356 м2 с чистовой отделкой,"
                            rightText="балконами, лоджиями и террасами В собственной ЗАКРЫТОЙ охраняемой территориИ."
                            size="small"
                            leftIsAccent={true}
                            rightIsAccent={false}
                            isNewLine={true}
                        />
                        <VideoPlay />
                    </div>
                </div>
            </section>
        </div>
    );
}
