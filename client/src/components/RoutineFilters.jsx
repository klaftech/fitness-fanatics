import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ActionButton from './ActionButton.jsx';
import '../assets/css/theme.css'; // Ensure the path to your theme.css is correct

const RoutineFilters = ({ handleSortSelected }) => {
    return (
        <Container fluid>
            <Row className="pb-3 justify-content-between align-items-center">
                <Col xs={4}>
                    <span className="routine-title">My Exercise Routine:</span>
                </Col>
                <Col xs={4}></Col>
                <Col xs={1} className="text-end">Sort By:</Col>
                <Col xs={1}>
                    <ActionButton 
                        style={{ backgroundColor: 'var(--primary-color)', color: 'white' }} 
                        title="Priority" 
                        onClick={() => handleSortSelected('priority')} 
                    />
                </Col>
                <Col xs={2}>
                    <ActionButton 
                        style={{ backgroundColor: 'var(--primary-color)', color: 'white' }} 
                        title="Exercise ID" 
                        onClick={() => handleSortSelected('exercise_id')} 
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default RoutineFilters;