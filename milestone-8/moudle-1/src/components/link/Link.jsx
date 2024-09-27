import PropTypes from "prop-types";
import React from "react";

const Link = ({ link }) => {
  const { title, path } = link;
  return (
    <div  >
      <li  className="mr-9 " >
        <a className="" href={path}>{title}</a>
      </li>
    </div>
  );
};
Link.propTypes = {
  route: PropTypes.object,
};
export default Link;
