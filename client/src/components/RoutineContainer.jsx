import { useState, useEffect } from 'react'
import RoutineList from './RoutineList.jsx'
import RoutineFilters from './RoutineFilters.jsx'

const RoutineContainer = () => {

    const [routines, setRoutines] = useState()
    const [errors, setErrors] = useState()

    useEffect(() => {
        fetch('api/routines')
            .then((response) => {
                if(!response.ok){
                    throw new Error('Failed to fetch routines');
                    //setErrors(response.error)
                }
                return response.json()
            })
            .then(data => setRoutines(data))
            .catch(error => {
                console.log(error.errors)
                setErrors(error)
            })
    }, [setRoutines])


    const handleSortClick = (sort_field) => {
        const sorted_routines = routines.toSorted((a, b) => {
            if (a[sort_field] < b[sort_field]) return -1;
            if (a[sort_field] > b[sort_field]) return 1;
            return 0; 
          });
        setRoutines(sorted_routines)
    }

    //show loading if fetch promises are not yet fulfilled into state
    if(!routines) return <div>Loading Routine...</div>

    return (
        <div style={{'margin':'2%'}}>
            <RoutineFilters handleSortSelected={handleSortClick} />
            <RoutineList routines={routines} />
        </div>
    );
}

export default RoutineContainer;
