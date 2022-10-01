import { useEffect } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

import WorkoutInfo from '../components/WorkoutInfo'
import WorkoutForm from '../components/WorkoutForm'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
                 <Container>
                     <Row>
                        <Col><WorkoutForm /></Col>
                        <Col>What is this application? Built with React.js, this little web application allows you to input your own workouts collection with images and tag them accordingly so you'll always have ideas of workouts you want to do while you're at the gym.</Col>
                    </Row></Container>

            <div className="workouts">
             <hr/>
                {workouts && workouts.map((workout) => (
                    <WorkoutInfo key={workout._id} workout={workout} />
                ))}
            </div>
            
        </div>
        
    )
}

export default Home