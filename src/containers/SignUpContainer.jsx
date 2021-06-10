import React, { useState, useCallback } from "react";
import { SignUpForm} from "../components";


const SignUpContainer = () => {
  const onSubmit = (login, password, secondPassword) => {
    if(password === secondPassword){
      console.log(login, password);
    }else{
      console.log('inccorect data!!');
    }
  }
  return <div>
    <SignUpForm onSubmit={onSubmit}/>
  </div>
}

export default SignUpContainer;