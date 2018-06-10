import * as React from 'react';
import { ButtonCssinJs } from 'qcloud-ui-tsx/packages';

export interface HelloProps { 
	compiler: string;
	framework: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class Hello extends React.Component<HelloProps, {}> {

    render() {
    	const { compiler, framework }= this.props;
        return <div>
        	<ButtonCssinJs>click!</ButtonCssinJs>
        	<h1>Hello from {compiler} and {framework}!</h1>
        </div>;
    }
}