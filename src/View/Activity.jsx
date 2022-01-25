import React from "react";
import { ListGroup} from "react-bootstrap";

const Activity = ({activity}) => {

    // name, description
    return(
        <ListGroup as="ol" >
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                <div className="fw-bold">Name: {activity.name} </div>
                Description: {activity.description}
                </div>
        
            </ListGroup.Item>
        </ListGroup>
    )
}

export default Activity;