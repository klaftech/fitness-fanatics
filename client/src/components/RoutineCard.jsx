import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

import ActionButton from './ActionButton.jsx';

const RoutineCard = ({routine}) => {


    const handleButtonClick = () => {
        console.log('button clicked')
        alert('button clicked')
    }

    const days = ["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

    return (
        <Card style={{ width: '18rem' }}>
            {routine.exercise.image ? <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> : ""}
            <Card.Body>
                <Card.Title>{routine.exercise.name ? routine.exercise.name : "Exercise_Name"}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{days[routine.day_of_the_week]} - {routine.exercise.muscle_group}</Card.Subtitle>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            Difficulty Level
                        </div>
                        <Badge bg="danger" pill>
                            {routine.exercise.difficulty_level ? routine.exercise.difficulty_level : "N/A"}
                        </Badge>
                    </ListGroup.Item>
                    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            Priority
                        </div>
                        <Badge bg="warning" pill>
                          {routine.priority}
                        </Badge>
                    </ListGroup.Item>
                    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            Weight
                        </div>
                        <Badge bg="success" pill>
                          {routine.current_weight}
                        </Badge>
                        &nbsp;
                        <Badge bg="primary" pill>
                          {routine.initial_weight}
                        </Badge>
                    </ListGroup.Item>
                    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            Reps
                        </div>
                        <Badge bg="success" pill>
                          {routine.current_reps}
                        </Badge>
                        &nbsp;
                        <Badge bg="primary" pill>
                          {routine.initial_reps}
                        </Badge>
                    </ListGroup.Item>
                    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            Sets
                        </div>
                        <Badge bg="success" pill>
                          {routine.current_sets}
                        </Badge>
                        &nbsp;
                        <Badge bg="primary" pill>
                          {routine.initial_sets}
                        </Badge>
                    </ListGroup.Item>
                </ListGroup>
                <Card.Text className="d-flex justify-content-center">
                        <ActionButton variant={"secondary"} title={"Edit Exercise"} onClick={handleButtonClick} />
                        &nbsp;&nbsp;&nbsp;
                        <ActionButton variant={"secondary"} title={"Remove"} onClick={handleButtonClick} />
                    </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default RoutineCard;
         