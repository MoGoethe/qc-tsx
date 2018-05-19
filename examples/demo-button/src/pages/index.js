import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'qcloud-ui-tsx/packages'

const App = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <Button >Click Me!</Button><br />
      <Button >Click Me!</Button><br />
      <Button >Click Me!</Button>
    </div>
  );
};

export default App;