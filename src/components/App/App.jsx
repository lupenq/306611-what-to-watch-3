import React from 'react';
import Main from '../Main/Main.jsx';

const App = (props) => {
  return (
    <Main
      // eslint-disable-next-line react/prop-types
      promoSettings={props.promoSettings}
    />
  );
};

export default App;
