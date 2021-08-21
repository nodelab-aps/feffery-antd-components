import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tree } from 'antd';
import {
    TableOutlined,
    UserOutlined,
    DatabaseOutlined,
    FileOutlined,
    FileTextOutlined,
    ScheduleOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css';

// 定义树形控件AntdTree，api参数参考https://ant.design/components/tree-cn/
export default class AntdTree extends Component {
    render() {
        // 取得必要属性或参数
        let {
            id,
            className,
            setProps,
            style,
            checkable,
            defaultExpandAll,
            defaultExpandedKeys,
            defaultExpandParent,
            multiple,
            selectable,
            showLine,
            showIcon,
            height,
            loading_state
        } = this.props;

        if (showLine){
            showLine = { 'showLeafIcon': false}
        }

        var { treeData } = this.props;

        // 定义字符串->对应icon对象的映射
        function str2Icon(str) {
            switch (str) {
                case 'table':
                    return <TableOutlined />;
                case 'user':
                    return <UserOutlined />;
                case 'database':
                    return <DatabaseOutlined />;
                case 'file':
                    return <FileOutlined />;
                case 'file-text':
                    return <FileTextOutlined />;
                case 'schedule':
                    return <ScheduleOutlined />;
                default:
                    return undefined;
            }
        }

        // 用于以递归的方式将节点icon属性替换成相应的icon对象
        function add_leaf_node_icon(inputTreeData) {
            if (typeof inputTreeData == typeof {}) {

                if (inputTreeData.hasOwnProperty('children')) {
                    inputTreeData['icon'] = str2Icon(inputTreeData['icon_name'])

                    for (var i = 0; i < inputTreeData.children.length; i++) {
                        inputTreeData.children[i] = add_leaf_node_icon(inputTreeData.children[i])
                    }

                } else {
                    inputTreeData['icon'] = str2Icon(inputTreeData['icon_name'])
                }
            }

            if (typeof inputTreeData == typeof []) {
                for (var i = 0; i < inputTreeData.length; i++) {
                    inputTreeData[i] = add_leaf_node_icon(inputTreeData[i])
                }
            }

            return inputTreeData;
        }

        treeData = add_leaf_node_icon(treeData)

        function listenSelect(e) {
            console.log(e)
            setProps({ selectedKeys: e })
        }

        function listenCheck(e) {
            setProps({ checkedKeys: e })
        }

        return (
            <Tree
                id={id}
                className={className}
                style={style}
                treeData={add_leaf_node_icon(treeData)}
                checkable={checkable}
                defaultExpandAll={defaultExpandAll}
                defaultExpandedKeys={defaultExpandedKeys}
                defaultExpandParent={defaultExpandParent}
                multiple={multiple}
                selectable={selectable}
                showLine={showLine}
                onSelect={listenSelect}
                onCheck={listenCheck}
                showIcon={showIcon}
                height={height}
                showLeafIcon={false}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
            />
        );
    }
}


// 定义递归PropTypes
const PropTreeNodeShape = {
    // 标题
    title: PropTypes.string.isRequired,

    // 唯一识别id
    key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

    // 可选，设置是否禁用
    disabled: PropTypes.bool,

    // 可选，设置节点对应icon
    icon_name: PropTypes.node,

    // 可选，当树为checkable时，设置对应节点是否展示checkbox
    checkable: PropTypes.bool,

    // 可选，设置是否禁用checkbox
    disableCheckbox: PropTypes.bool,

    // 可选，设置对应节点是否可选
    selectable: PropTypes.bool,

};

const PropTreeNode = PropTypes.shape(PropTreeNodeShape);
PropTreeNodeShape.children = PropTypes.arrayOf(PropTreeNode);
const treeDataPropTypes = PropTypes.arrayOf(PropTreeNode);

// 定义参数或属性
AntdTree.propTypes = {
    // 部件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 组织树形结构的json结构数据
    treeData: treeDataPropTypes.isRequired,

    // 设置是否渲染icon，默认为true
    showIcon: PropTypes.bool,

    // 设置是否在节点前添加选择框，默认为false
    checkable: PropTypes.bool,

    // 设置是否默认展开全部节点，默认为false
    defaultExpandAll: PropTypes.bool,

    // 设置初始状态下被展开的节点key数组
    defaultExpandedKeys: PropTypes.arrayOf(PropTypes.string),

    // 设置是否默认展开父节点，默认为false
    defaultExpandParent: PropTypes.bool,

    // 设置是否允许对节点进行多选，默认为false
    multiple: PropTypes.bool,

    // 设置是否允许对节点进行选择，默认为true
    selectable: PropTypes.bool,

    // 设置是否显示连接线，默认为true
    showLine: PropTypes.oneOfType([PropTypes.bool, PropTypes.exact({ showLeafIcon: PropTypes.bool})]),

    // 用于存储当前已被选中的节点key数组
    selectedKeys: PropTypes.array,

    // 用于存储当前已被勾选的节点key数组
    checkedKeys: PropTypes.array,

    // 设置虚拟滚动模式下的窗口像素高度，不设置时则不会启动虚拟滚动模式
    height: PropTypes.number,

    loading_state: PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        is_loading: PropTypes.bool,
        /**
         * Holds which property is loading
         */
        prop_name: PropTypes.string,
        /**
         * Holds the name of the component that is loading
         */
        component_name: PropTypes.string
    }),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

// 设置默认参数
AntdTree.defaultProps = {
    checkable: false,
    defaultExpandAll: false,
    defaultExpandedKeys: [],
    defaultExpandParent: false,
    multiple: false,
    selectable: true,
    showLine: { 'showLeafIcon': false},
    showIcon: true
}
