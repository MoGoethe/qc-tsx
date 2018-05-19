import React from 'react';
from 'react';
import classNames from 'classnames';  
import omit from 'omit.js';
//React就不用说了，classNames与omit这两个文件的作用：
//前者是条件判断输出className的值，后者是移出对象的指定属性，而实现浅拷贝
//这两个依赖API很简单，就不多说了，有兴趣的可以自己去github上看一下：
//omit https://github.com/benjycui/omit.js， 需要注意的是retruns the new Object 与lodash中的
//omit类似
//classnames  https://github.com/JedWatson/classnames

//定义IconProps接口
export interface IconProps {
  type: string;  //配合className，决定了显示的类型
  className?: string;
  title?: string;
  onClick?: React.MouseEventHandler<any>; //接口里定义了的事件，虽然没有定义其它事件，但是也是可以
//加的，只不过编译阶段可能报错， 另外，这个MouseEventHandler难道是自己随意起的名字，再定义为any？应该
//不是吧？要不然为什么会前面是React
  spin?: boolean;  //  结合对应的className，控制icon旋转
  style?: React.CSSProperties;
}

const Icon = (props: IconProps) => {//TypeScript的无状态组件的写法
  const { type, className = '', spin } = props;
  const classString = classNames({
    anticon: true,
    'anticon-spin': !!spin || type === 'loading',
    [`anticon-${type}`]: true,
  }, className);

  // 这里说一下为什么要用omit()：html的<i>标签，其标准标签属性只有六种：id、class、title、style、
dir、lang。
  // IconProps接口中的6种属性（方法），type、spin不属于上述六种。onClick为事件属性，可以；
  return <i {...omit(props, ['type', 'spin'])} className={classString} />;
};

export default Icon;