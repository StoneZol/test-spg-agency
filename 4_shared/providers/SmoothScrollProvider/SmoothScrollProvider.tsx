'use client';

import { useEffect } from 'react';
import Scrollbar from 'smooth-scrollbar';
import { Scrollbar as ScrollbarClass } from 'smooth-scrollbar/scrollbar';

const setMomentum = ScrollbarClass.prototype.setMomentum;

ScrollbarClass.prototype.setMomentum = function (x: number, y: number) {
    setMomentum.call(this, 0, y);
};

const SmoothScrollProvider = () => {
    useEffect(() => {
        const scrollbar = Scrollbar.init(document.body, {
            damping: 0.08,
            thumbMinSize: 20,
        });

        const header = document.getElementById('header');

        const handleScroll = ({ offset }: { offset: { x: number; y: number } }) => {
            if (!header) {
                return;
            }

            header.style.transform = `translate3d(${offset.x}px, ${offset.y}px, 0)`;
        };

        scrollbar.addListener(handleScroll);

        return () => {
            scrollbar.destroy();

            if (header) {
                header.style.transform = '';
            }
        };
    }, []);

    return null;
};

export default SmoothScrollProvider;
