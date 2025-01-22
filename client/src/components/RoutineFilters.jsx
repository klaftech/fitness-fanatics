import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ActionButton from './ActionButton.jsx';

const RoutineFilters = ({handleSortSelected}) => {
    return (
        <Container fluid>
            <Row className="pb-2 justify-content-between">
                <Col xs={4}>
                    My Exercise Routine:
                </Col>
                <Col xs={4}></Col>
                <Col xs={1}>Sort By:</Col>
                <Col xs={1}>
                    <ActionButton variant="secondary" title="Priority" onClick={() => handleSortSelected('priority')} />
                </Col>
                <Col xs={2}>
                    <ActionButton variant="secondary" title="Exercise ID" onClick={() => handleSortSelected('exercise_id')} />
                </Col>
            </Row>
        </Container>
    );
}

export default RoutineFilters;
