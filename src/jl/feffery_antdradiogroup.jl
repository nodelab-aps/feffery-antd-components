# AUTO GENERATED FILE - DO NOT EDIT

export feffery_antdradiogroup

"""
    feffery_antdradiogroup(;kwargs...)

An AntdRadioGroup component.

Keyword arguments:
- `id` (String; optional)
- `buttonStyle` (String; optional)
- `className` (String; optional)
- `defaultValue` (String; optional)
- `disabled` (Bool; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `optionType` (String; optional)
- `options` (optional): . options has the following type: Array of lists containing elements 'label', 'value', 'disabled'.
Those elements have the following types:
  - `label` (String; required)
  - `value` (String; required)
  - `disabled` (Bool; optional)s
- `size` (String; optional)
- `style` (Dict; optional)
- `value` (String; optional)
"""
function feffery_antdradiogroup(; kwargs...)
        available_props = Symbol[:id, :buttonStyle, :className, :defaultValue, :disabled, :loading_state, :optionType, :options, :size, :style, :value]
        wild_props = Symbol[]
        return Component("feffery_antdradiogroup", "AntdRadioGroup", "feffery_antd_components", available_props, wild_props; kwargs...)
end

