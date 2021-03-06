import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './matchFormHandler.scss'

const MatchFormHandler = () => {
    const navigate = useNavigate()

    const opponentField = useRef()
    const venueField = useRef()
    const dateField = useRef()
    const timeField = useRef()

    const matchHandler = (e) => {

        e.preventDefault()

        const opponent = opponentField.current.value;
        const venue = venueField.current.value;
        const date = dateField.current.value;
        const time = timeField.current.value;

        const match = {
            opponent,
            venue,
            date,
            time
        }

        console.log(match)

        // axios.post('http://localhost:8099/pfa/add/fixture', match)
        //     .then(response => console.log(response))
        //     .catch(err => console.log(err))


        fetch('/addmatch', {
            method: 'POST',
            body: JSON.stringify(match),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(data => {
            console.log(data)
            navigate('/')
        })


    }

    return (
        <div>
            <div className="form-box match display" >
                <h4>create friendly match</h4>
                <form onSubmit={matchHandler} className='match-form' id='match'>

                    <fieldset>
                        <legend>match data entry</legend>

                        <div className="input-block">
                            <div className="label">
                                <label htmlFor="opponent">opponent:</label>
                            </div>

                            <div className="input">
                                <input type="text" name='opponent' ref={opponentField} /> <br />
                            </div>
                        </div>

                        {/* isHomeMatch */}

                        <div className="input-block">
                            <div className="label">
                                <label htmlFor="venue">Venue:</label>
                            </div>

                            <div className="input">
                                <input type="text" name='venue' ref={venueField} /> <br />
                            </div>
                        </div>

                        <div className="input-block">
                            <div className="label">
                                <label htmlFor="date">date:</label>
                            </div>

                            <div className="input">
                                <input type="date" name='date' ref={dateField} /> <br />
                            </div>
                        </div>

                        <div className="input-block">
                            <div className="label">
                                <label htmlFor="time">time:</label>
                            </div>

                            <div className="input">
                                <input type="time" name='time' ref={timeField} /> <br />
                            </div>
                        </div>

                        <button>Save</button>
                    </fieldset>


                </form>
            </div>
        </div>
    )
}

export default MatchFormHandler
