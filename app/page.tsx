import type { Metadata } from "next";
import Image from "next/image";

import { DescriptionText } from "@/4_shared/components/custom/DescriptionText";
import { CInchapin } from "@/4_shared/components/icons/CInchapin";
import Logo2MiniIcon from "@/4_shared/components/icons/Logo2MiniIcon";
import { SetJsonLD } from "@/4_shared/components/warriors/SetJsonLD";
import { VideoPlay } from "@/2_features/VideoPlay";

import { homeJsonLdSchemas, metadata as homeMetadata } from "./page.seo";
import styles from "./page.module.scss";

export const metadata: Metadata = homeMetadata;

export default function Home() {
    return (
        <>
            <SetJsonLD schemas={homeJsonLdSchemas} />

            <div className={styles.home}>
                <section className={styles.hero} aria-label="Главный экран">
                    <div className={styles.hero_image}>
                        <Image
                            src="/hero.webp"
                            alt="INCHAPIN — дом бизнес-класса в зимнем окружении"
                            width={1760}
                            height={600}
                            loading="eager"
                        />
                    </div>
                    <div className={styles.hero_content}>
                        <DescriptionText
                            leftText="Дом бизнес-класса"
                            rightText="Для ценителей роскоши"
                            size="medium"
                            leftIsAccent={true}
                            rightIsAccent={true}
                            isNewLine={true}
                        />
                        <div>
                            <CInchapin />
                        </div>
                    </div>
                </section>

                <section className={styles.pr} aria-label="О проекте">
                    <div className={styles.pr_left}>
                        <div className={styles.pr_left_content}>
                            <div className={styles.pr_left_title}>О проекте</div>
                            <div className={styles.pr_left_image}>
                                <Image
                                    src="/section2.webp"
                                    alt="INCHAPIN — интерьер и архитектура проекта"
                                    width={733}
                                    height={900}
                                    sizes="(max-width: 767px) 296px, (max-width: 1023px) 290px, (max-width: 1280px) 408px, (max-width: 1769px) 567px, 733px"
                                />
                                <Logo2MiniIcon className={styles.pr_left_image_logo} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.pr_right}>
                        <div className={styles.pr_right_description_box}>
                            <div className={styles.pr_right_bibka} />
                            <DescriptionText
                                leftText={`уютное и безопасное \n пространство для счастливой,`}
                                rightText="спокойной и размеренной жизни"
                                size="large"
                                leftIsAccent={false}
                                rightIsAccent={true}
                                isNewLine={true}
                            />
                            <DescriptionText
                                leftText="Квартиры от 65 до 356 м2 с чистовой отделкой,"
                                rightText={`балконами, лоджиями и террасами  В собственной \n ЗАКРЫТОЙ охраняемой территориИ.`}
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
        </>
    );
}
