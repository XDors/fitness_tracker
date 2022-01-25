import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react';
import { Form, Button, ToggleButton, ButtonGroup } from 'react-bootstrap';

const CreateRoutine = ({api, user}) => {
    const [nameValue, setNameValue] = useState('');
    const [goalValue, setGoalValue] = useState('');
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();
    
    const onClickPostHandler = async (event) => {
        event.preventDefault();

        try{
            const response = await fetch(`${api}/routines`, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                    Authorization: `Bearer ${user.token}`,
                },
                body: JSON.stringify({
                    name: nameValue,
                    goal: goalValue,
                    isPublic: checked
                }),
            }),
            result = await response.json();
            console.log(result);

            if(result.id) {
                //setRoutine
                navigate('/');
            } else {
                throw new Error(result.error.message)
            }
        }catch (error) {
            alert(error.message)
        }
    };


    return(
        <Form className='createRoutine'>
            <h2 className='display-3 text-center'>Create Routine</h2>
            <Form.Group className='mb-3' controlId='formName'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type='text'
                    name='Name'
                    value={nameValue}
                    placeholder='Ex: Lovable Leg Day'
                    onChange={(event) => {
                        setNameValue(event.target.value);
                    }}
                />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGoal'>
                <Form.Label>Goal</Form.Label>
                <Form.Control
                   type='text'
                   name='Goal'
                   value={goalValue}
                   placeholder='Ex: Build the Tonest Legs You Have Ever Seen'
                   onChange={(event) => {
                       setGoalValue(event.target.value);
                   }}
                />
            </Form.Group>
            <br/>
            <ButtonGroup className='mb-2'>
                <ToggleButton
                    className='mb-2'
                    id='toggle-check'
                    type='checkbox'
                    variant='outline-primary'
                    checked={checked}
                    value='1'
                    onChange={(event) => setChecked(event.currentTarget.checked)}
                > Make Routine Public
                </ToggleButton>
            </ButtonGroup>
            <br/>
            <br/>
            <Button variant='outline-secondary' onClick={onClickPostHandler}>Create Routine</Button> 
        </Form>
    )
}

export default CreateRoutine;