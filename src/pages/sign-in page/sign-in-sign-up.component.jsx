import './sign-in-sign-up.styles.scss'
import SignIn from '../../components/Sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';


const SignInAndSignUp = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn className='sign-in' />
        <SignUp className='sign-up' />
    </div>
)

export default SignInAndSignUp;