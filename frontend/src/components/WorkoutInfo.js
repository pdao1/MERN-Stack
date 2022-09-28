import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const WorkoutInfo = ({ workout }) => {
    const { dispatch } = useWorkoutsContext()


    const handleCLick = async () => {
        const response = await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }
    return (
        <div className="workout-info">
            <h4 className="workout-title">{workout.title}</h4>
            <p><strong>Load: (lbs):</strong>{workout.load}</p>
            <p><strong>Reps: (lbs):</strong>{workout.reps}</p>
            <p>{workout.createdAt}</p>
           <button className="delete" onClick={handleCLick}>delete</button>
        </div>
    )

}

export default WorkoutInfo

