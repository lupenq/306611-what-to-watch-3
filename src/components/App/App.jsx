import React from 'react';
import Main from '../Main/Main.jsx';
import PropTypes from 'prop-types';


const App = ({filmsList, promoSettings}) => {
  return (
    <Main
      promoSettings={promoSettings}
      filmsList={filmsList}
    />
  );
};

App.PropTypes = {
  promoSettings: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }),
  filmsList: PropTypes.array.isRequired
};

export default App;
