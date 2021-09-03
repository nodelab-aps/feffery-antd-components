# AUTO GENERATED FILE - DO NOT EDIT

export feffery_antdinput

"""
    feffery_antdinput(;kwargs...)

An AntdInput component.

Keyword arguments:
- `id` (String; optional)
- `addonAfter` (String; optional)
- `addonBefore` (String; optional)
- `allowClear` (Bool; optional)
- `bordered` (Bool; optional)
- `className` (String; optional)
- `defaultValue` (String; optional)
- `disabled` (Bool; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `maxLength` (Real; optional)
- `mode` (String; optional)
- `nClicksSearch` (Real; optional)
- `nSubmit` (Real; optional)
- `placeholder` (String; optional)
- `showCount` (Bool; optional)
- `size` (String; optional)
- `style` (Dict; optional)
- `value` (String; optional)
"""
function feffery_antdinput(; kwargs...)
        available_props = Symbol[:id, :addonAfter, :addonBefore, :allowClear, :bordered, :className, :defaultValue, :disabled, :loading_state, :maxLength, :mode, :nClicksSearch, :nSubmit, :placeholder, :showCount, :size, :style, :value]
        wild_props = Symbol[]
        return Component("feffery_antdinput", "AntdInput", "feffery_antd_components", available_props, wild_props; kwargs...)
end

