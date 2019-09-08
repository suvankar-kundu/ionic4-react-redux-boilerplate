import React from 'react';
import PropTypes from 'prop-types';
import { Nav, NavLink } from './bootstrapComponents';

function AnchorLink(props) {
  const { disabled, linkURL, linkLabel, linkTarget, elementClass } = props;
  return (
    <Nav>
      <NavLink
        disabled={disabled}
        href={linkURL}
        title={linkLabel}
        target={linkTarget}
        className={elementClass}>
        {linkLabel}
      </NavLink>
    </Nav>
  );
}

AnchorLink.propTypes = {
  disabled: PropTypes.bool,
  linkLabel: PropTypes.string,
  linkTarget: PropTypes.string,
  elementClass: PropTypes.string,
  linkURL: PropTypes.string
};

export default AnchorLink;
