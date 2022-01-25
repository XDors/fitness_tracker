import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';

const CreateActivity = ({api, user}) => {
    const [nameValue, setNameValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');
    const navigate = useNavigate();
    
    const onClickPostHandler = async (event) => {
        event.preventDefault();

        try{
            const response = await fetch(`${api}/activities`, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                    Authorization: `Bearer ${user.token}`,
                },
                body: JSON.stringify({
                    name: nameValue,
                    description: descriptionValue,
        
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
        <Form className='createActivity'>
            <h2 className='display-3 text-center'>Create Activity</h2>
            <Form.Group className='mb-3' controlId='formName'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type='text'
                    name='Name'
                    value={nameValue}
                    placeholder='Ex: Incline Bench Press'
                    onChange={(event) => {
                        setNameValue(event.target.value);
                    }}
                />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formDescription'>
                <Form.Label>Description</Form.Label>
                <Form.Control
                   type='text'
                   name='Description'
                   value={descriptionValue}
                   placeholder='Ex: find bench, lay on bench, proceed...'
                   onChange={(event) => {
                        setDescriptionValue(event.target.value);
                   }}
                />
            </Form.Group>
            <br/>
            <Button variant='outline-secondary' onClick={onClickPostHandler}>Create Activity</Button>
        </Form>
    )
}

export default CreateActivity;