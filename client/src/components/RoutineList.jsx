import RoutineCard from './RoutineCard.jsx'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RoutineList = ({routines}) => {
    return (
        <Container>
            <Row>
                {routines && routines.map((routine) => 
                    <Col key={routine.id} xs={4}>
                        <RoutineCard routine={routine} />
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export default RoutineList;   