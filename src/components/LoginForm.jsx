import React, { useState, useCallback } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const LoginForm = (props) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const onLoginChange = e => {
    setLogin(e.target.value);
  }
  const onPasswordChange = e => {
    setPassword(e.target.value);
  }
  const onSubmitClick = useCallback(() => {
    props.onLogin(login, password);
  }, [login, password]);
  return (
    <div>
      
      <div className='nes-field'>
        <label htmlFor='login'>Your Login</label>
        <input onChange={onLoginChange} value={login} type='text' id='login' className='nes-input' />
      </div>

      <div className='nes-field'>
          <label htmlFor='password'>Your Password</label>
          <input onChange={onPasswordChange} value={password} type='password'  id='password' className='nes-input'/>
      </div>

      <button onClick={onSubmitClick} type='Submit' className='nes-btn is-primary'>
          Sign in
      </button>     
      <Link to="/signin"><button type="button" class="nes-btn is-primary">Sign Up</button></Link>
    </div>
  );
};

export default LoginForm;
