import React from 'react';
import { bool } from 'prop-types';

function Loader({ isLoading }) {
  return isLoading && <div>Loading...</div>;
}

Loader.propTypes = {
  isLoading: bool.isRequired,
};

export { Loader };
