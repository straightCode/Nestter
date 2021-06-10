import React from "react";
import { connect } from "react-redux";
import { LoginForm } from "../components";
import { loginAction } from "../redux-store/actions/auth-actions";

const LoginContainer = (props) => {
  return <LoginForm {...props}/>
};

const mapStateToProps = state => {
  return {
    token: state.auth.token,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onLogin: (login, password) => {
      dispatch(loginAction(login, password));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
