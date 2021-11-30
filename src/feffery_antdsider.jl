# AUTO GENERATED FILE - DO NOT EDIT

export feffery_antdsider

"""
    feffery_antdsider(;kwargs...)
    feffery_antdsider(children::Any;kwargs...)
    feffery_antdsider(children_maker::Function;kwargs...)


An AntdSider component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The content of the tab - will only be displayed if this tab is selected
- `id` (String; optional)
- `className` (String; optional)
- `style` (Dict; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `breakpoint` (String; optional)
- `collapsed` (Bool; optional)
- `collapsedWidth` (Real; optional)
- `collapsible` (Bool; optional)
- `defaultCollapsed` (Bool; optional)
- `reverseArrow` (Bool; optional)
- `theme` (String; optional)
- `width` (Real; optional)
- `trigger` (a list of or a singular dash component, string or number; optional)
"""
function feffery_antdsider(; kwargs...)
        available_props = Symbol[:children, :id, :className, :style, :loading_state, :breakpoint, :collapsed, :collapsedWidth, :collapsible, :defaultCollapsed, :reverseArrow, :theme, :width, :trigger]
        wild_props = Symbol[]
        return Component("feffery_antdsider", "AntdSider", "feffery_antd_components", available_props, wild_props; kwargs...)
end

feffery_antdsider(children::Any; kwargs...) = feffery_antdsider(;kwargs..., children = children)
feffery_antdsider(children_maker::Function; kwargs...) = feffery_antdsider(children_maker(); kwargs...)
