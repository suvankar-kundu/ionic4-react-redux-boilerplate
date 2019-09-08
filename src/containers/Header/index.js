// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';


const Header = props => {
  const { userAuthentication } = props;
  return (
    <div className="header">
      <div className="row">
        <div className="col-md-3">Logo comes here</div>
        <div className="col-md-6">
          {userAuthentication === 'success' ? (
            <ul className="row nav-items-class" style={{ listStyleType: 'none' }}>
              <li className="col-md-2">
                <Link to="/home">
                  <FormattedMessage id="app.home" description="Redux" />
                </Link>
              </li>
              <li className="col-md-3">
                <Link to="/componentslist">
                  <FormattedMessage id="app.reusableComponents" description="Reusable Components" />
                </Link>
              </li>
              <li className="col-md-3">
                <Link to="/PersonList">
                  <FormattedMessage id="app.peoplelist" description="People" />
                </Link>
              </li>
              <li className="col-md-3">
                <Link to="/ionic">
                  <FormattedMessage id="app.ionic" description="ionic" />
                </Link>
              </li>
            </ul>
          ) : (
              ''
            )}
        </div>
        <div className="col-md-3">
          {/* <Translate /> */}
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    userAuthentication: state.UserValidate.userAuthentication
  };
}

Header.propTypes = {
  userAuthentication: PropTypes.string
};

export default connect(mapStateToProps)(Header);
