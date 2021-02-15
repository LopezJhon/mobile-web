import React from 'react';

import SignIn from '../../component/signin/signin';
import SignUp from '../../component/signup/signup';

import './signinsignuppage.scss';

function SignInSignOutPage() {
    return (
        <div className='sign-in-sign-up-page'>
            <div className='banner'/>
            <div className='sign-it-up'>
                <SignIn />
                <SignUp />
            </div>
        </div>
    )
}

export default SignInSignOutPage;