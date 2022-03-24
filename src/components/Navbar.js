import { Link } from 'react-router-dom'
import './Navbar.scss'
import { IconContext } from 'react-icons/lib';
import * as GrIcons from 'react-icons/gr'

const Navbar = () => {

    
    const closeMenu = () => {
        const nav = document.querySelector('nav');
        nav.classList.remove('displayed');
    }
    
    return (
        <nav className='navbar'>
            <IconContext.Provider value={{ color: 'green', size: '1.5em' }}>
                <div className='btnclose' onClick={closeMenu}>
                    <GrIcons.GrClose />
                </div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/admin'>Admin</Link></li>
                </ul>
            </IconContext.Provider>
        </nav>
    )
}

export default Navbar