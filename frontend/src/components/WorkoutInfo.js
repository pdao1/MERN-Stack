const WorkoutInfo = ({ workout }) => {
    return (
        <div className="workout-info">
            <h4 className="workout-title">{workout.title}</h4>
            <p><strong>Load: (kg):</strong>{workout.load}</p>
            <p><strong>Reps: (kg):</strong>{workout.reps}</p>
            <p>{workout.createdAt}</p>
        </div>
    )

}

export default WorkoutInfo

