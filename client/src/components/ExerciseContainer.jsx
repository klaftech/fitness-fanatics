import { useState, useEffect } from 'react'
import ExerciseList from './ExerciseList.jsx'

const ExerciseContainer = () => {

    const [exercisesData, setExercisesData] = useState()
    const [exercises, setExercises] = useState()
    const [errors, setErrors] = useState()

    useEffect(() => {
        fetch('api/exercises')
            .then((response) => {
                if(!response.ok){
                    throw new Error('Failed to fetch exercises');
                    //setErrors(response.error)
                }
                return response.json()
            })
            .then(data => {
                setExercises(data)
                setExercisesData(data)
            })
            .catch(error => {
                console.log(error.errors)
                setErrors(error)
            })
    }, [setExercisesData])

    /*const handleSortClick = (sort_field, nested=null) => {
        const sorted_routines = routines.toSorted((a, b) => {
            const a_sort = nested != null ? a[nested][sort_field] : a[sort_field]
            const b_sort = nested != null ? b[nested][sort_field] : b[sort_field]
            if (a_sort < b_sort) return -1;
            if (a_sort > b_sort) return 1;
            return 0; 
          });
        //console.log(sorted_routines)
        setRoutines(sorted_routines)
    }*/

    /*const handleFilterClick = (day) => {
        let routines_response
        if(day == "all"){
            routines_response = routinesData
        } else {
            routines_response = routinesData.filter(routine => routine.day_of_the_week == day)
        }
        setRoutines(routines_response)
    }*/

    /*const handleRemove = (id) => {
        fetch(`/api/routines/${id}`, { method: 'DELETE' })
            .then(response => {
                if (response.ok) {
                    setRoutines(routines.filter(routine => routine.id !== id));
                    setRoutinesData(routines.filter(routine => routine.id !== id));
                } else {
                    console.error('Failed to remove routine');
                }
            })
            .catch(error => console.error('Error removing routine:', error));
    };*/

    //show loading if fetch promises are not yet fulfilled into state
    if(!exercises) return <div>Loading Exercises...</div>

    return (
        <div style={{'margin':'2%'}}>
            <RoutineFilters handleSortSelected={handleSortClick} handleFilterSelected={handleFilterClick} />
            <RoutineList routines={routines} handleRoutineDelete={handleRemove} />
        </div>
    );
}

export default ExerciseContainer;