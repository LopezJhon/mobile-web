import React from 'react';

import FormInput from '../Form-Input/form.input';
import CustomButton from '../custom-button/custom-button';

import './signup';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    };

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state

        if(password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, {displayName})
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch(error) {
            console.log(error)
        }
        
    };

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        });
    };
    render(){
        return <div className="sign-in">
            <h1>Already have an account?</h1>
            <span>Sign In</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput
                    name='displayName'
                    type='text'
                    handleChange={this.handleChange}
                    value={this.state.displayName}
                    label='display name'
                    required
                />
                <FormInput
                    name='email'
                    type='email'
                    handleChange={this.handleChange}
                    value={this.state.email}
                    label='email'
                    required
                />
                <FormInput 
                    name='password'
                    type='password'
                    handleChange={this.handleChange}
                    value={this.state.password}
                    label='password'
                    required
                />
                <FormInput
                    name='confirmPassword'
                    type='password'
                    handleChange={this.handleChange}
                    value={this.state.confirmPassword}
                    label='confirm password'
                    required
                />
                <CustomButton type='submit'>Sign Up</CustomButton>
            </form>
        </div>  
    };
};

export default SignUp;