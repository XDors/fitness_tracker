import React from "react";
import { ListGroup, Badge, Button } from "react-bootstrap";

const UserRoutineActivity = ({routine, user}) => {
    
    //name, description, and duration and/or count
    return(
        <div>
            <h2 className='display-3 text-center'>Routine Name PlaceHolder</h2>
            <Button className='form-inline' variant='outline-secondary' /* onClick={onClickCreateRoutineHandler}  */>Add Activity</Button>
            <Badge variant="primary" pill>#reps/minutes</Badge>
            <ListGroup as="ol" numbered>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                    </div>
                    <Badge variant="primary" pill>
                    14
                    </Badge>
                </ListGroup.Item>
                <Button className='form-inline' variant='outline-primary'/*  onClick={onClickCreateRoutineHandler} */ >Edit Activity</Button>
                <Button className='form-inline' variant='outline-danger' /* onClick={onClickCreateRoutineHandler} */ >Delete Activity</Button>
        </ListGroup>
        </div>
    )
}

export default UserRoutineActivity;