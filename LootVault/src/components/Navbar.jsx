import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css'
import { useNavigate } from 'react-router-dom';

//import components below

function Navbar() {

    const navigate = useNavigate()
    
    const handleLogout = () => {
        localStorage.removeItem('jwtToken')
        localStorage.removeItem('userId')
        navigate('/login')
        
    }

    return (
        <nav className='navbar'>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/viewlists">My Collection</Link>
            </li>
          </ul>
          <button onClick={handleLogout}>Log out</button>
        </nav>
      );
    };

    export default Navbar