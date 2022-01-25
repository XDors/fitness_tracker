import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const Login = ({api, setLocalStorageUser}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onSubmitLogin = (event) => {
        event.preventDefault();
        async function fetchLogin() {
            const response = await fetch(`${api}/users/login`, {
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
           if(result.token) {
                setLocalStorageUser(result);
                navigate('/');   
            }   else {
                alert('Incorrect Username/Password')
            }
        }
        fetchLogin();
    };

    
    return(
        <Form className='login'>
           <h1 className='display-3 text-center'>Login</h1>
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
                placeholder='enter username'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            </Form.Group>
            <Button variant='outline-secondary' onClick={onSubmitLogin}>Login</Button>
        </Form>
        
    );
}

export default Login;