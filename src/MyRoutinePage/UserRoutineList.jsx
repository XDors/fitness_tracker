import React, {useState, useEffect} from "react";
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Routine from "../View/Routine";

const UserRoutineList = ({api, user}) => {
    const navigate = useNavigate();
    const [routines, setRoutines] = useState([]);
    
    //if (user)
    useEffect( () => {
        /* if(user){ */
            async function myRoutines() {
                const response = await fetch (`${api}/users/${user?.user?.username}/routines`, {
                    headers: {
                        'Content-Type' : 'application/json',
                        Authorization: `Bearer ${user.token}`,
                    },
                })  .then(response => response.json())
                    .then(data => setRoutines(data))
                    .catch(console.error); 
            }
            myRoutines();
        /* } */
    }, [user])


    const onClickCreateRoutineHandler = (event) => {
        navigate('/createroutine')
       
    }
    const onClickCreateActivityHandler = (event) => {
        navigate('/createactivity')
    }
    return (
        <React.Fragment>
            <Form className='form-inline'>
                <h1 className='display-3 text-center'>MyRoutines</h1>
                <Button className='form-inline' variant='outline-secondary' onClick={onClickCreateRoutineHandler} >Create Routine</Button>
                <Button className='form-inline' variant='outline-secondary' onClick={onClickCreateActivityHandler} >Create Activity</Button>
                {/* { result == [] && <h2 className='display-3 text-center'>No Routines have been created yet! Create a Routine!</h2>}  */}
                {routines.map((routine) =>
                <Routine key={routine.id} api={api} routine={routine} user={user}/> 
                )}
            </Form>    
        </React.Fragment>
    )
}

export default UserRoutineList;