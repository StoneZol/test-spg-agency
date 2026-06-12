"use client";

import { AnimatePresence, motion } from "motion/react";
import type {
    MenuProps,
    ValueContainerProps,
} from "react-select";
import { components } from "react-select";

import { HoverRiseText, Select } from "@/4_shared/components/custom";

import { useHeaderApartmentSelect } from "./HeaderApartmentSelect.hooks";
import styles from "./HeaderApartmentSelect.module.scss";
import type { ApartmentOption, HeaderApartmentSelectProps } from "./HeaderApartmentSelect.types";
import { CChevronDown } from "@/4_shared/components/icons/CChevronDown";

const AnimatedValueContainer = ({
    children,
    ...props
}: ValueContainerProps<ApartmentOption, false>) => {
    const selected = props.getValue()[0];
    const placeholder = props.selectProps.placeholder;
    const displayKey = selected?.value ?? "placeholder";
    const displayText = selected?.label ?? String(placeholder ?? "");

    return (
        <components.ValueContainer {...props}>
            <div className={styles.trigger_text}>
                <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                        key={displayKey}
                        className={styles.single_value_text}
                        initial={{ opacity: 0, y: "100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <HoverRiseText>{displayText}</HoverRiseText>
                    </motion.span>
                </AnimatePresence>
            </div>
            <div className={styles.hidden_value_children} aria-hidden>
                {children}
            </div>
            <CChevronDown className={styles.trigger_chevron} />
        </components.ValueContainer>
    );
};

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
                placeholder="ВЫБРАТЬ КВАРТИРУ"
                classNames={classNames}
                styles={selectStyles}
                components={{
                    DropdownIndicator: () => null,
                    IndicatorSeparator: () => null,
                    IndicatorsContainer: () => null,
                    Menu: AnimatedMenu,
                    Placeholder: () => null,
                    SingleValue: () => null,
                    ValueContainer: AnimatedValueContainer,
                }}
                isSearchable={false}
                menuPortalTarget={menuPortalTarget}
                menuPosition="fixed"
            />
        </div>
    );
};

export default HeaderApartmentSelect;
