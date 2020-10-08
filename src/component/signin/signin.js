import React from 'react';

import FormInput from '../Form-Input/form.input';
import CustomButton from '../custom-button/custom-button';

import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

import './signin.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            email: '',
            password: ''
        };
    };

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(
                email,
                password
            );
            this.setState({
                email:'',
                password: ''
            });
        } catch (error) {
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
                <div className='sign-in-button'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle}>Sign In With Google</CustomButton>
                </div>
            </form>
        </div>  
    };
};

export default SignIn;