"use client";

import { AnimatePresence, motion } from "motion/react";
import type { MenuProps, PlaceholderProps, SingleValueProps } from "react-select";
import { components } from "react-select";

import { HoverRiseText, Select } from "@/4_shared/components/custom";

import { useHeaderApartmentSelect } from "./HeaderApartmentSelect.hooks";
import styles from "./HeaderApartmentSelect.module.scss";
import type { ApartmentOption, HeaderApartmentSelectProps } from "./HeaderApartmentSelect.types";

const AnimatedPlaceholder = (props: PlaceholderProps<ApartmentOption, false>) => (
    <components.Placeholder {...props} className={styles.placeholder}>
        <HoverRiseText>{props.children}</HoverRiseText>
    </components.Placeholder>
);

const AnimatedMenu = (props: MenuProps<ApartmentOption, false>) => (
    <components.Menu {...props}>
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
            {props.children}
        </motion.div>
    </components.Menu>
);

const AnimatedSingleValue = (props: SingleValueProps<ApartmentOption, false>) => {
    const { data } = props;

    return (
        <components.SingleValue {...props}>
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    key={data.value}
                    className={styles.value_text}
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "-100%" }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                    <HoverRiseText>{`${data.label} \/`}</HoverRiseText>
                </motion.span>
            </AnimatePresence>
        </components.SingleValue>
    );
};

const HeaderApartmentSelect = ({ }: HeaderApartmentSelectProps) => {
    const {
        apartmentOptions,
        classNames,
        menuPortalTarget,
        selectStyles,
        setValue,
        value,
    } = useHeaderApartmentSelect();

    return (
        <div className={styles.select}>
            <Select<ApartmentOption, false>
                options={apartmentOptions}
                value={value}
                onChange={setValue}
                placeholder="ВЫБРАТЬ КВАРТИРУ \/"
                classNames={classNames}
                styles={selectStyles}
                components={{
                    DropdownIndicator: () => null,
                    IndicatorSeparator: () => null,
                    Menu: AnimatedMenu,
                    Placeholder: AnimatedPlaceholder,
                    SingleValue: AnimatedSingleValue,
                }}
                isSearchable={false}
                menuPortalTarget={menuPortalTarget}
                menuPosition="fixed"
            />
        </div>
    );
};

export default HeaderApartmentSelect;
