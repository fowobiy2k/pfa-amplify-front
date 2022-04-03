import { useState } from 'react';
import {Link} from 'react-router-dom'
import { TaskLinks } from '../data/TaskLinks'
import MatchFormHandler from '../components/form_handlers/MatchFormHandler';
import PlayerFormHandler from '../components/form_handlers/PlayerFormHandler';
// import axios from 'axios'
import './admin.scss'
import PaymentFormHandler from '../components/form_handlers/PaymentFormHandler';
import ExpenseFormHandler from '../components/form_handlers/ExpenseFormHandler';

const Admin = () => {

    const [task, setTask] = useState();

    

    const displayForm = (e) => {
        e.preventDefault()

        setTask(e.target.innerHTML)

    }

    // const registerPlayer = async (e) => {
    //     e.preventDefault()
        
    //     let myForm = document.getElementById(task)

    //     const requestOptions = {
    //         method: 'POST',
    //         Headers: { 'Content-Type': 'application/json '},
    //         body : myForm
    //     };

    //     axios.post('http://localhost:8099/pfa/createplayer', myForm)
    //         .then(response => console.log(response))
    //         .catch(err => console.log(err))

    //     myForm.reset()

    //     setTask('')

    // }

    return (
        <div className='admin'>
            <h3 className='welcome'>Welcome, admin</h3>            

            <div className="tasks">

                <div className="scheduler">
                    {TaskLinks.map(task => {
                        return <div className={task.class}>
                            <Link to={task.path} onClick={displayForm}>{task.text}</Link>
                        </div>
                    })}
                </div>

                <div className="forms">
                    
                    { task === 'match' && <MatchFormHandler /> }
                    { task === 'register player' && <PlayerFormHandler /> }
                    { task === 'payment' && <PaymentFormHandler /> }
                    { task === 'expenses' && <ExpenseFormHandler /> }

                    

                    
                    
                </div>
                <div className="display" id='display'></div>

            </div>
        </div>
    )
}

export default Admin
