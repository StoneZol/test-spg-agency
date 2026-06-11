import type { GroupBase, Props as ReactSelectProps } from "react-select";

export type SelectProps<
    Option = unknown,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>,
> = ReactSelectProps<Option, IsMulti, Group>;

export type { ClassNamesConfig, GroupBase, StylesConfig } from "react-select";
