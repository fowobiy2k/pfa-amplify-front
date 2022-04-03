import { Link } from 'react-router-dom';
import classes from './card.module.scss';

const Card = ({ url, header, desc }) => {
    const image = require('../img/' + url)
    return (
        <div className={classes.card}>
            <img src={image} alt="my card" />

            <div className={classes.textbox}>
                <p className={classes.desc}>{desc}</p>
                <Link to='/'> <h3 className={classes.header}>{header}</h3> </Link> 
            </div>

        </div>
    )
}

export default Card
