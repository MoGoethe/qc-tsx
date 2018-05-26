import React from 'react';
import PropTypes from 'prop-types';
import { Button,Icon } from 'qcloud-ui-tsx/packages'

const App = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <Button size="small" bgColor="green" >button</Button><br />
      <Button >button</Button><br />
      <Button bgColor="orange" size="large" >button</Button>
      <Icon />
    </div>
  );
};

export default App;	