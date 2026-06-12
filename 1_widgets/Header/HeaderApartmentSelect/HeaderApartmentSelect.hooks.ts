"use client";

import { useMemo, useState } from "react";
import type { ClassNamesConfig, SingleValue, StylesConfig } from "react-select";

import styles from "./HeaderApartmentSelect.module.scss";
import type { ApartmentOption } from "./HeaderApartmentSelect.types";

const apartmentOptions: ApartmentOption[] = [
    { value: "1-room", label: "1-комнатная" },
    { value: "2-room", label: "2-комнатная" },
    { value: "3-room", label: "3-комнатная" },
];

const getMenuPortalTarget = () => {
    if (typeof document === "undefined") {
        return null;
    }

    return document.body;
};

export const useHeaderApartmentSelect = () => {
    const [value, setValue] = useState<SingleValue<ApartmentOption>>(null);
    const [menuPortalTarget] = useState(getMenuPortalTarget);

    const classNames = useMemo<ClassNamesConfig<ApartmentOption, false>>(
        () => ({
            container: () => styles.container,
            control: () => styles.control,
            valueContainer: () => styles.value_container,
            singleValue: () => styles.single_value,
            placeholder: () => styles.placeholder,
            menuPortal: () => styles.menu_portal,
            menu: () => styles.menu,
            menuList: () => styles.menu_list,
            option: ({ isFocused, isSelected }) =>
                [
                    styles.option,
                    isFocused && styles.option_focused,
                    isSelected && styles.option_selected,
                ]
                    .filter(Boolean)
                    .join(" "),
        }),
        []
    );

    const selectStyles = useMemo<StylesConfig<ApartmentOption, false>>(
        () => ({
            container: (base) => ({
                ...base,
                display: "flex",
                width: "100%",
            }),
            control: (base) => ({
                ...base,
                display: "flex",
                width: "100%",
                minHeight: "unset",
                cursor: "pointer",
            }),
            valueContainer: (base) => ({
                ...base,
                display: "flex",
                alignItems: "center",
                flex: "1 1 auto",
                width: "100%",
                padding: 0,
                cursor: "pointer",
            }),
            input: (base) => ({
                ...base,
                position: "absolute",
                opacity: 0,
                width: 1,
                height: 1,
                margin: 0,
                padding: 0,
                border: 0,
                minWidth: 0,
            }),
            singleValue: (base) => ({
                ...base,
                position: "static",
                top: "auto",
                transform: "none",
                margin: 0,
                width: "100%",
                maxWidth: "none",
                color: "inherit",
                cursor: "pointer",
            }),
            placeholder: (base) => ({
                ...base,
                position: "static",
                margin: 0,
                width: "100%",
                maxWidth: "none",
                color: "inherit",
                cursor: "pointer",
            }),
            option: (base) => ({
                ...base,
                cursor: "pointer",
            }),
            menuPortal: (base) => ({
                ...base,
                zIndex: 1100,
            }),
            menu: (base) => ({
                ...base,
                zIndex: 1100,
            }),
        }),
        []
    );

    return {
        apartmentOptions,
        classNames,
        menuPortalTarget,
        selectStyles,
        setValue,
        value,
    };
};
