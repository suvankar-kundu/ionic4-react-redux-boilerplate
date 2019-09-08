import React from 'react';
import { Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { userValidation } from '../../actions/login';
import { Button } from '../../components';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
        this.changeHandler = this.changeHandler.bind(this);
        this.hanleUserValidation = this.hanleUserValidation.bind(this);
    }

    changeHandler(e, handler) {
        if (handler !== undefined) {
            if (handler === 'name') {
                this.setState({ username: e.target.value });
            } else {
                this.setState({ password: e.target.value });
            }
        }
    }
    hanleUserValidation() {
        const { userValidation } = this.props;
        const { username, password } = this.state;
        const userCredentials = { username, password };
        userValidation(userCredentials);
    }

    render() {
        const { userAuthentication } = this.props;
        const { username, password } = this.state;
        const disabled = username === '' || password === '';
        if (userAuthentication === 'success') {
            return <Redirect to={{ pathname: '/home', state: userAuthentication }} />;
        } else {
            return (
                // Bring language options from api
                <div className="container">
                    <div className="userValidate">
                        {userAuthentication === 'fail' ? (
                            <FormattedMessage
                                className="errMsg"
                                id="app.credentialsError"
                                description="Invalid Credientials"
                            />
                        ) : (
                                ''
                            )}
                        <Label for="username" className="col-md-12">
                            <FormattedMessage id="app.username" description="User Name" />
                        </Label>
                        <Input placeholder="username" onChange={e => this.changeHandler(e, 'name')} />
                        <Label for="password" className="col-md-12">
                            <FormattedMessage id="app.password" description="Password" />
                        </Label>
                        <Input placeholder="password" onChange={e => this.changeHandler(e, 'password')} />
                        <Button
                            buttonText="app.submit"
                            buttonClass="primary"
                            handleButtonSubmit={this.hanleUserValidation}
                            disabled={disabled}
                        />
                    </div>
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        userAuthentication: state.UserValidate.userAuthentication
    };
}

function mapDispatchToProps(dispatch) {
    return {
        userValidation: data => dispatch(userValidation(data))
    };
}

Login.propTypes = {
    userValidation: PropTypes.func,
    userAuthentication: PropTypes.string
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
