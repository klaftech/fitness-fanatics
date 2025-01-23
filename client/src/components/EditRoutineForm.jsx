import { useParams } from 'react-router-dom';

const EditRoutineForm = () => {
    const { id } = useParams();

    return (
        <div>
            <p>ID: {id}</p>
        </div>
    );
}

export default EditRoutineForm;
