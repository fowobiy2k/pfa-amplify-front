import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import classes from './footer.module.scss';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <IconContext.Provider value={{color:'white', size: '1em'}}>
                <div className={classes.socials}>
                    <div><Link to='https://www.facebook.com/pioneersfootballacademy/'><FaIcons.FaFacebookF /></Link></div>
                    <div><Link to='https://www.facebook.com/pioneersfootballacademy/'><AiIcons.AiOutlineInstagram /></Link></div>
                    <div><Link to='https://www.facebook.com/pioneersfootballacademy/'><FaIcons.FaTwitter /></Link></div>
                    
                </div>
            </IconContext.Provider>
        </footer>
    )
}

export default Footer
