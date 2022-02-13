import React from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import '../custom-button/custom-button.styles.scss'

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'', password:''})
    }

    handleChange = event => {
        const {value,name} = event.target;
        this.setState({[name]:value})
    }

    alert = () => {
        alert('Alert')
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have account</h2>
                <span> Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" label="email" type="email" value={this.state.email} 
                    required handleChange={this.handleChange}/>
                    <FormInput name="password" label="password" type="password" value={this.state.password} 
                    required handleChange={this.handleChange}/>

                    <div className="button">
                        <CustomButton type="submit"> Sign In</CustomButton>
                        <button type="button" onClick={signInWithGoogle} className="google-sign-in custom-button">Sign in with Google</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;