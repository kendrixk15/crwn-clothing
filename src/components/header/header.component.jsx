import { Link } from 'react-router-dom'
import './header.styles.scss'
import { ReactComponent as Logo} from './crown.svg'
import { auth } from '../../firebase/firebase.utils'

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link to="/" className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/contact' className='option'>CONTACT</Link>
            {
                currentUser 
                ? 
                <div className='option' onClick={()=> auth.signOut()}> Sign Out</div>
                :
                <Link to='/signin'>
                Sign In
                </Link>
            }
        </div>
    </div>
)

export default Header;