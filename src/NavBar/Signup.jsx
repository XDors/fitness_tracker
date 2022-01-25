import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const Signup = ({api}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onSubmitSignup = (event) => {
        event.preventDefault();
        async function fetchSignup() {
            const response = await fetch(`${api}/users/register`, {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                        username: username,
                        password: password
                }),
            }),
            result = await response.json();

            // change the response to be the error message form the result object
            result.token ? navigate('/login') : alert('Profile not created, please try again.')
            
        }
        fetchSignup();
    };
    
    return(
        <Form className='signup'>
        <h1 className='display-3 text-center'>Sign-in</h1>
         <Form.Group className='mb-3' controlId='formUsername'>
         <Form.Label>Username</Form.Label>
         <Form.Control
             type='username'
             placeholder='enter username'
             value={username}
             onChange={(event) => setUsername(event.target.value)}
         />
         </Form.Group>
         <Form.Group className='mb-3' controlId='formPassword'>
         <Form.Label>Password</Form.Label>
         <Form.Control
             type='password'
             placeholder='enter password'
             value={password}
             onChange={(event) => setPassword(event.target.value)}
         />
         </Form.Group>
         <Button variant='outline-secondary' onClick={onSubmitSignup}>Sign-up</Button>
     </Form>
    )
}

export default Signup;