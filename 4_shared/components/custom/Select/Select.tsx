"use client";

import ReactSelect from "react-select";
import type { GroupBase } from "react-select";

import { useSelectInstanceId } from "./Select.hooks";
import type { SelectProps } from "./Select.types";

const Select = <
    Option,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>,
>({
    instanceId,
    unstyled = true,
    ...props
}: SelectProps<Option, IsMulti, Group>) => {
    const resolvedInstanceId = useSelectInstanceId(instanceId);

    return (
        <ReactSelect
            instanceId={resolvedInstanceId}
            unstyled={unstyled}
            {...props}
        />
    );
};

export default Select;
