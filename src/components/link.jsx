import React from 'react';
import PropTypes from 'prop-types'; 


const Link = ({ route }) => {
  return (
    <li className="hover:bg-slate-500 mr-10 px-6 hover">
      <a href={route.path} className="text-lime-950 hover:underline tex">
        {route.name}
      </a>
    </li>
  );
};


Link.propTypes = {
  route: PropTypes.shape({
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Link;
