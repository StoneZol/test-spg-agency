'use client';

import Image from 'next/image';
import { createPortal } from 'react-dom';

import { CPlayIcon } from '@/4_shared/components/icons/CPlayIcon';

import { useVideoPlay } from './VideoPlay.hooks';
import styles from './VideoPlay.module.scss';
import { VideoPlayProps } from './VideoPlay.types';

const VideoPlay = ({ }: VideoPlayProps) => {
    const { handlePlayClick, mounted, videoRef, videoSrc } = useVideoPlay();

    return (
        <>
            <div className={styles.video_play}>
                <div className={styles.video_play_title}>
                    <span className={styles.video_play_title_text}>
                        Видео о проекте
                    </span>
                    <span className={styles.video_play_title_duration}>
                        1:25 минут
                    </span>
                </div>
                <div className={styles.video_preview_divider} />
                <div className={styles.video_preview_image}>
                    <Image
                        src="/videoPrew.webp"
                        alt="video preview"
                        width={241}
                        height={241}
                        sizes="(max-width: 767px) 131px, (max-width: 1023px) 133px, (max-width: 1280px) 133px, (max-width: 1769px) 186px, 241px"
                    />
                    <div className={styles.video_preview_image_overlay}>
                        <div className={styles.video_play_button_wrap}>
                            <button
                                type="button"
                                className={styles.video_play_button}
                                aria-label="Смотреть видео"
                                onClick={handlePlayClick}
                            />
                            <span className={styles.video_play_button_icon} aria-hidden>
                                <CPlayIcon />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {mounted &&
                createPortal(
                    <video
                        ref={videoRef}
                        className={styles.video_player}
                        src={videoSrc}
                        controls
                        playsInline
                    />,
                    document.body
                )}
        </>
    );
};

export default VideoPlay;
