import classes from './fixture.module.scss'

const Fixture = ({ fixture }) => {
    return (
        <div className={classes.fixtureContainer}>
            <div className={classes.teamNameDiv}>
                <div className={classes.teamNameWrapper}>
                    <div className={classes.teamNameContainer}>{fixture.homeMatch ? <p className={classes.teamName}>Pioneers FA</p> : <p className={classes.teamName}>{fixture.opponent}</p>}</div>

                    <div className={classes.versusContainer}><p className={classes.versus}>vs</p></div>

                    <div className={classes.teamNameContainer}>{fixture.homeMatch ? <p className={classes.teamName}>{fixture.opponent}</p> : <p className={classes.teamName}>Pioneers FA</p>}</div>
                </div>

            </div>


            <div className={classes.schedule}>
                <div className={classes.scheduleContainer}>
                    <div className={classes.dateDiv}>{fixture.date}</div>
                    <div className={classes.timeDiv}>{fixture.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Fixture
