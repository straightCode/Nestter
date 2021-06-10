import React, { useState, useCallback } from "react";

const SignUpForm = ({onSubmit}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [secondPassword, setSecondPassword] = useState('');

  const onLoginChange = (e) => {
    setLogin(e.target.value);
  }
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const onSecondPasswordChange = (e) => {
    setSecondPassword(e.target.value);
  }

  const onSubmitClick = useCallback(() => {
    onSubmit(login, password, secondPassword);
  }, [login, password, secondPassword]);
  return (
    <div>
      <div className='nes-field'>
        <label htmlFor='login'>Your login</label>
        <input  onChange={onLoginChange} type='text' id='login' className='nes-input' />
      </div>
      <div className='nes-field'>
        <label htmlFor='password'>Your password</label>
        <input onChange={onPasswordChange} type='password' id='password' className='nes-input' />
      </div>
      <div className='nes-field'>
        <label htmlFor='secondPassword'>Repeat Your Password</label>
        <input onChange={onSecondPasswordChange} type='password' id='secondPassword' className='nes-input' />
      </div>
      <button onClick={onSubmitClick} type="submit" className="nes-btn is-primary">Sign Up</button>
    </div>
  );
};

export default SignUpForm;
