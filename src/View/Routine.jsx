import React from "react";
import { CardGroup, Card, Button} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const Routine = ({api, routine, user}) => {
    const navigate = useNavigate();
    
    const onClickDeleteHandler = (event) => {
        const deleteRoutine = async () => {
            const response = await fetch (`${api}/routines/${routine.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization : `Bearer ${user.token}`,
                }
                }).then(response => response.json())
                .then(result => {
                    console.log(result);
                })
                .catch(console.error);
                    }
            /* const result = response.json();
            if (result.success) {
                navigate('/')
            } else {
                console.log(result.error);
            }
            }; */
                
                deleteRoutine();
                }
                
    const onClickEditHandler = (event) => {
        const editRoutine = async () => {
            await fetch (`${api}/routines/${routine.id}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    name: 'placeholder',
                    goal: 'placeholder'
                }) .then(response => response.json())
                   .then(result => {
                       console.log(result);
                   })
                   .catch(console.error)
            })
        }
    };
    
    const onClickUserRoutineActivityHandler = (event) => {
        navigate('/userroutineactivity') 
    };
    
    return(
        <CardGroup>
                <Card border="secondary" style={{ width: '18rem' }}>
                    <Card.Header>By: {routine.creatorName}</Card.Header>
                    <Card.Body>
                        <Card.Title>Routine: {routine.name}</Card.Title>
                        <Card.Text>
                            Goal: {routine.goal}
                        </Card.Text>
                    </Card.Body>
                    <Button variant='outline-secondary' onClick={onClickUserRoutineActivityHandler} >View Activities</Button>
                    {(user && user.user.username === routine.creatorName) && <Button variant='outline-primary' /* onClick={onClickViewHandler} */ >Edit Routine</Button>}
                    {(user && user.user.username === routine.creatorName) &&<Button variant='outline-danger' onClick={onClickDeleteHandler} >Delete Routine</Button>}
                </Card>
        </CardGroup>
    )
}

export default Routine; 

