import React from 'react';

import SignIn from '../../component/signin/signin';
import SignUp from '../../component/signup/signup';

import './signinsignuppage.scss';

function SignInSignOutPage() {
    return (
        <div className='sign-in-sign-up-page'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInSignOutPage;