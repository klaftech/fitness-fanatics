import { useState, useEffect } from 'react'
import ExerciseList from './ExerciseList.jsx'

const ExerciseContainer = ({ userData }) => {

    const [exercises, setExercises] = useState()
    const [errors, setErrors] = useState()

    useEffect(() => {
        fetch('api/exercises')
            .then((response) => {
                if(!response.ok){
                    throw new Error('Failed to fetch exercises');
                }
                return response.json()
            })
            .then(data => {
                setExercises(data)
                console.log(data)
            })
            .catch(error => {
                console.log(error.errors)
                setErrors(error)
            })
    }, [])

    //show loading if fetch promises are not yet fulfilled into state
    if(!exercises) return <div>Loading Exercises...</div>

    return (
        <div style={{'margin':'2%'}}>
            <ExerciseList exercises={exercises} userData={userData} />
        </div>
    );
}

export default ExerciseContainer;