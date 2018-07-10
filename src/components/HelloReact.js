
import React from 'react';
import PropTypes from 'prop-types';


const HelloReact = ({ text }) => (
  <h1>
    {`Hello ${text}`}
  </h1>
);

HelloReact.propTypes = {
  text: PropTypes.string,
};

HelloReact.defaultProps = {
  text: 'React',
}

export default HelloReact;
