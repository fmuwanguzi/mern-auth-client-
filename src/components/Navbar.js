import React from 'react';
import { NavLink, Link} from 'react-router-dom'


const Navbar = (props) => {
    return(
        <nav>
         <div className="container">
                <Link className="navbar-brand" to="/">MERN Auth</Link>
                <button className="navbar-toggler" type="button" data-toggle="#navbarsExample07" data-target="#navbarsExample07" aria-controls="#navbarExample07" aria-label="Toggle Navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample07">
                    <ul>
                        <li>
                            
                        </li>
                    </ul>

                </div>
            </div>

        </nav>
    )
}

export default Navbar;