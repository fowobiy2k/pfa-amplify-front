import { Link } from 'react-router-dom';
import classes from './MainName.module.scss';

const MainName = () => {
    return (
        <div className={classes.mainName}>
            <Link to='/'> <h1 className={classes.maintext}>Pioneers</h1> </Link>
        </div>
    )
}

export default MainName
