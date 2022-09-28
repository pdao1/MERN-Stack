import { useEffect } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

import WorkoutInfo from '../components/WorkoutInfo'
import WorkoutForm from '../components/WorkoutForm'


const Home = () => {
    const {workouts, dispatch} = useWorkoutsContext()
    
    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }
        
        fetchWorkouts()
}, [])


    return ( 
        <div className="Home">
            <div className="workouts">
             <WorkoutForm />
             <hr/>
                {workouts && workouts.map((workout) => (
                    <WorkoutInfo key={workout._id} workout={workout} />
                ))}
            </div>
        </div>
    )
}

export default Home