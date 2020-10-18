import React from 'react'

import './signin-page.style.scss'

import Signin from '../../components/signin/signin.component'
import Signup from '../../components/signup/signup.component'

const SigninPage = () => (
    <div className='signinPage'> 
        <Signin />
        <Signup />
     </div>

)

export default SigninPage