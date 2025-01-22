import React, { useState, useEffect } from 'react';
import RoutineCard from './RoutineCard.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RoutineList = () => {
    const [routines, setRoutines] = useState([]);

    useEffect(() => {
        fetch('/api/routines')
            .then(response => response.json())
            .then(data => setRoutines(data))
            .catch(error => console.error('Error fetching routines:', error));
    }, []);

    const handleRemove = (id) => {
        fetch(`/api/routines/${id}`, { method: 'DELETE' })
            .then(response => {
                if (response.ok) {
                    setRoutines(routines.filter(routine => routine.id !== id));
                } else {
                    console.error('Failed to remove routine');
                }
            })
            .catch(error => console.error('Error removing routine:', error));
    };

    return (
        <Container>
            <Row>
                {routines && routines.map((routine) => 
                    <Col key={routine.id} xs={4}>
                        <RoutineCard routine={routine} handleRemove={handleRemove} />
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export default RoutineList;