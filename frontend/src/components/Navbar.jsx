import { Link } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <h1>CRUD OPERATION</h1>
            </div>
            <ul className='nav-list'>
                <li><Link to="/">List</Link></li>
                <li><Link to="/add">Add Task</Link></li>
            </ul>
        </div>
    )
}
