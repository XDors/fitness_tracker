import React, {useState} from "react";
/* import { useNavigate } from "react-router-dom"; */
import Routine from "../View/Routine";

const RoutineList = ({api, user}) => {
    const [routines, setRoutines] = useState([]);
    /* const navigate = useNavigate(); */
   
    async function fetchRoutines() {
        const response = await fetch(`${api}/routines`, {
            headers: {
                'Content-Type': 'aplication/json',
            },
        }) .then(response => response.json())
           .then(data => setRoutines(data))
           .catch(console.error);
    }
    fetchRoutines();
    
    return(
        <div>
            <h2 className='display-3 text-center'>All Routines</h2>
            {routines.map((routine) =>
                <Routine key={routine.id} routine={routine} user={user} api={api}/> 
            )}
        </div>
    )
}

export default RoutineList;