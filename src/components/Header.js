import MainName from './MainName'
import SubName from './SubName'
import * as FaIcons from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import classes from './Header.module.scss'

const Header = () => {

    const openMenu = () => {
        const nav = document.querySelector('nav');
        nav.classList.contains('displayed') ? nav.classList.remove('displayed') : nav.classList.add('displayed');
    }


    return (
        <header>
            <IconContext.Provider value={{ color: 'white', size: '1.5em' }}>
                <div>
                    <MainName />
                    <SubName />
                </div>


                <div className={classes.menuIcon} id='menuicon' onClick={openMenu}>
                    <FaIcons.FaBars />
                </div>
            </IconContext.Provider>
        </header>
    )
}

export default Header
