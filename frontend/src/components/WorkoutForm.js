import { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const refreshPage = () => {
  window.location.reload(false);
}


const WorkoutForm = () => {
      const { dispatch } = useWorkoutsContext
      const [title, setTitle] = useState('')
      const [load, setLoad] = useState('')
      const [reps, setReps] = useState('')
      const [tags, setTags] = useState('')
      const [error, setError] = useState(null)

      const handleSubmit = async (e) => {
        e.preventDefault()

      const workout = {title, load, reps, tags}

      const response = await fetch('/api/workouts', {
          method: 'POST',
          body: JSON.stringify(workout),
          headers: {
            'Content-Type': 'application/json'  
          }
        })
        const json = await response.json()

        if (!response.ok) {
          setError(json.error)
        }
        if(response.ok) {
          setTitle('')
          setLoad('')
          setReps('')
          setTags('')
          setImage('')
          setError(null)
          console.log('new workout added', json) 
          dispatch({type: 'CREATE_WORKOUT', payload: json})
        }
      }
      return  (
        <form className="create" onSubmit={handleSubmit}>
          <h3>Add a New Workout</h3>
      
          <label>Exercise Title</label>
          <input 
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        /><br/>

          <label>Exercise Load (lbs)</label>
          <input 
          type="number"
          onChange={(e) => setLoad(e.target.value)}
          value={load}
        /><br/>
        
          <label>Exercise Reps</label>
          <input 
          type="number"
          onChange={(e) => setReps(e.target.value)}
          value={reps}
        /><br/>
         <label>Tag</label><br/>
         <select type="text"
          onChange={(e) => setTags(e.target.value)}
          value={tags}>
          <option value="Push">Push</option>
          <option value="Pull">Pull</option>
          <option value="Legs">Legs</option>
          <option value="Others">Others</option>
        </select>
          <br/>
         {/* const AddTags() = 
         [tags, setTags] => useState([
   "HTML", "CSS", "JavaScript"
])
return (
    <div className="tags-input-container">
     { tags.localeCompare((tag, index) => (
                 <div className="tag-item">
     <span className="text">{tags}</span>
     <span className="close">&times;</span>
     </div>

     )) }

     <input 
     type="text" className="tags-input" placeholder="Add a Tag"
     onChange={(e) => setTags(e.target.value)}
     value={tags}/>
   </div>
    )
} */}

        
        <button className="submit" onClick={refreshPage}>Add Workout</button>
        {error && <div className="error">{error}</div>}
        </form>

  )
}

export default WorkoutForm