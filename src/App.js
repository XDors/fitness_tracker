import React, {useState, useEffect} from 'react';
import './App.css';
import Navigation from './NavBar/Navigation';
import Signup from './NavBar/Signup';
import Login from './NavBar/Login';
import ActivityList from './ActivityPage/ActivityList';
import UserRoutineList from './MyRoutinePage/UserRoutineList';
import CreateRoutine from './MyRoutinePage/RoutineForm';
import CreateActivity from './ActivityPage/ActivityForm';
import UserRoutineActivity from './RoutinePage/RoutineActivityView';
import RoutineList from './RoutinePage/RoutineList';
import {Route, Routes} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';




function App() {

  const api = "https://fitnesstrac-kr.herokuapp.com/api"
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const retrieveUser = localStorage.getItem('user');
    if (retrieveUser){
      const userObject = JSON.parse(retrieveUser);
      setUser(userObject);
    }
  }, []);

  function setLocalStorageUser(user){
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  }

  function userLogout(){
    console.log('you have logged out');
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login');
  }

  return (
    <React.Fragment>
      <Navigation userLogout={userLogout} user={user} />
      <Routes>
        <Route 
          path='/signup'
          element={<Signup api={api} />}
        />
        <Route
          path='/login'
          element={<Login api={api} setLocalStorageUser={setLocalStorageUser} />}
        />
        <Route
          path='/'
          element={<UserRoutineList api={api} user={user} />}
        />
        <Route
          path='/createroutine'
          element={<CreateRoutine api={api} user={user} />}
        />
        <Route
          path='/routines'
          element={<RoutineList api={api} />}
        />
        <Route
          path='/activities'
          element={<ActivityList api={api} />}
        />
        <Route
          path='/createactivity'
          element={<CreateActivity api={api} user={user} />}
        />
         <Route
          path='/userroutineactivity'
          element={<UserRoutineActivity api={api} user={user} />}
        />
      </Routes>
    </React.Fragment>
  );
}

export default App;
