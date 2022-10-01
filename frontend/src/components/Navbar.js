import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <header>
           <div className="container">
                <Link to="/">
                    <h1>All Workouts</h1>
                </Link>
                <Link to="/push-days">
                    <h1>Push Days</h1>
                </Link>
                <Link to="/pull-days">
                    <h1>Pull Days</h1>
                </Link>
                <Link to="/leg-days">
                    <h1>Leg Days</h1>
                </Link>
                <Link to="/other-days">
                    <h1>Other Days</h1>
                </Link>
           </div>
        </header>
    )
}

export default Navbar