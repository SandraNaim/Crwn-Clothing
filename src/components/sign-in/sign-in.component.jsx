import React, { useState } from "react";
import CustomButton from "../custom-button/custom-buttom.component";
import FormInput from "../form-input/form-input.component";

import './sign-in.styles.scss';
import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";

// To covert the class comp. to functional hooks:
// instead of distructuring this.props, u need to distruct them in the initiation of the function(parameters)
// and distruct the state value using useState
// add const to the functions 

const SignIn = ({ emailSignInStart, googleSignInStart }) =>{

    const [userCredentials, setUserCredentials] = useState({email: '', password: ''})
    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email,password);
    }
    const handleChange = event => {
        const {value, name } = event.target
        setUserCredentials({...userCredentials, [name]: value})
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    name="email" 
                    type="email" 
                    label="email"
                    value={email} 
                    handleChange={handleChange} 
                    required 
                />

                <FormInput 
                    name="password" 
                    type="password" 
                    label="password"
                    value={password} 
                    handleChange={handleChange}
                    required 
                />

                <div className="buttons">
                    <CustomButton type='submit' >Sign In</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
                        {' '}
                        Sign in with Google{' '}
                    </CustomButton>
                </div>

            </form>
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email,password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);