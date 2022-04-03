import squad from '../img/squad.jpeg'
import classes from './Teampic.module.scss'

const Teampic = () => {
    return (
        <div className={classes.mainImageContainer}>
            <img className={classes.teampic} src={squad} alt='the group' />
        </div>
    )
}

export default Teampic
