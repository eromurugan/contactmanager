import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  const headerStyle = { color: "red", fontSize: "40px" };

  return (
    <div>
      <h1 style={headerStyle}>{props.branding}</h1>
    </div>
  );
};

Header.defaultProps = {
  branding: "Contact Manager"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
