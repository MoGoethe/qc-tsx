import * as React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import omit from 'omit.js';
import Icon from '../icon';

/*
	注意事项：
	1. className ,classify ,text ,hasIcon ,onlyIcon ,size
	2. a标签按钮还是原始button按钮
*/
export type ButtonType = 'default' | 'primary' | 'ghost' | 'dashed' | 'danger';
export type ButtonSize = 'small' | 'default' | 'large';

export interface ButtonProps{

}

export default class Button extends React.Component<ButtonProps, any> {

	render(){

		return( <button>btn-text</button>)
	}
}
