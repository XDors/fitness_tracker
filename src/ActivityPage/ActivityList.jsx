import React, {useState} from "react";
import Activity from "../View/Activity";

const ActivityList = ({api}) => {
    const [activities, setActivities] = useState([]);

    async function fetchActivities() {
        const response = await fetch(`${api}/activities`, {
            headers: {
                'Content-Type': 'aplication/json',
            },
        }) .then(response => response.json())
           .then(data => setActivities(data))
           .catch(console.error);
    }
    fetchActivities();
    
    return(
        <div>
            <h2 className='display-3 text-center'>All Activities</h2>
            {activities.map((activity) =>
                <Activity key={activity.id} activity={activity}/> 
            )}
        </div>
    )
}

export default ActivityList;