"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

const VIDEO_PLAY_SRC = "/1732690402_looped_1732690401.mp4";
const VIDEO_INITIAL_VOLUME = 0.2;

type WebkitVideoElement = HTMLVideoElement & {
    webkitEnterFullscreen?: () => void;
};

const subscribe = () => () => { };

const getClientSnapshot = () => true;

const getServerSnapshot = () => false;

const requestVideoFullscreen = async (video: HTMLVideoElement) => {
    if (video.requestFullscreen) {
        await video.requestFullscreen();
        return;
    }

    const webkitVideo = video as WebkitVideoElement;

    if (webkitVideo.webkitEnterFullscreen) {
        webkitVideo.webkitEnterFullscreen();
    }
};

const isVideoFullscreen = (video: HTMLVideoElement) => {
    return (
        document.fullscreenElement === video ||
        (document as Document & { webkitFullscreenElement?: Element }).webkitFullscreenElement ===
        video
    );
};

export const useVideoPlay = () => {
    const [isOpen, setIsOpen] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const mounted = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);

    const closeVideo = useCallback(() => {
        const video = videoRef.current;

        if (video) {
            video.pause();
        }

        setIsOpen(false);
    }, []);

    const openVideo = useCallback(async () => {
        const video = videoRef.current;

        if (!video) {
            return;
        }

        video.volume = VIDEO_INITIAL_VOLUME;
        video.currentTime = 0;

        try {
            await video.play();
            await requestVideoFullscreen(video);
            setIsOpen(true);
        } catch {
            video.pause();
            setIsOpen(false);
        }
    }, []);

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const video = videoRef.current;

        if (!video) {
            return;
        }

        const onFullscreenChange = () => {
            if (!isVideoFullscreen(video)) {
                closeVideo();
            }
        };

        const onWebkitEndFullscreen = () => {
            closeVideo();
        };

        document.addEventListener("fullscreenchange", onFullscreenChange);
        video.addEventListener("webkitendfullscreen", onWebkitEndFullscreen);

        return () => {
            document.removeEventListener("fullscreenchange", onFullscreenChange);
            video.removeEventListener("webkitendfullscreen", onWebkitEndFullscreen);
        };
    }, [closeVideo, isOpen]);

    const handlePlayClick = useCallback(() => {
        void openVideo();
    }, [openVideo]);

    return {
        handlePlayClick,
        mounted,
        videoRef,
        videoSrc: VIDEO_PLAY_SRC,
    };
};
