import Fixture from './Fixture'
import classes from './comingfixtures.module.scss'

const ComingFixtures = ({ fixtures }) => {
    return (
        <div className={classes.mainBlock}>
            <div className={classes.header}>
                <h3>upcoming fixtures</h3>
            </div>

            {fixtures.length > 0  ? 
                fixtures.map(fixture => {
                    return <div key={fixture.id}><Fixture fixture={fixture} /></div>
                })  : <p><i>No scheduled match yet</i></p> }

            
        </div>
    )
}

export default ComingFixtures
