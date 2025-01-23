import React, { useState, useEffect } from 'react';
import ExerciseCard from './ExerciseCard.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ExerciseList = ({ exercises/*, handleRoutineDelete*/ }) => {
    
    return (
        <Container>
            <Row>
                {exercises && exercises.map((exercose) => 
                    <Col key={exercise.id} xs={4}>
                        <ExerciseCard exercise={exercise} /*handleRoutineDelete={handleRoutineDelete}*/ />
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export default ExerciseList;