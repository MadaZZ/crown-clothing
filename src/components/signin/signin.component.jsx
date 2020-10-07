import React from 'react'

import './signin.style.scss'

class Signin extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have a account</h2>
                <span>Sign in with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <input
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        required />
                    <label>Email</label>
                    <input
                        name='password'
                        value={this.state.password}
                        type='password'
                        onChange={this.handleChange}
                        required />
                    <label>Password</label>

                    <input type="submit" value='submit form' />
                </form>
            </div>
        )
    }
}

export default Signin;