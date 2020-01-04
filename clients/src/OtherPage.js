import React from '../node_modules/@types/react';
import { Link } from '../node_modules/react-router-dom';

export default () => {
  return (
    <div>
      Im some other page
      <Link to="/">Go back to home page!</Link>
    </div>
  );
};
