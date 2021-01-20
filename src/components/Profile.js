import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Profile = (props) => {
    const { handleLogout } = props;
    const { exp, id, name, email } = props.user;
    const expirationTime = new Date(exp * 1000);
    let currentTime = Date.now();
    console.log(String(expirationTime));

    if (currentTime >= expirationTime) {
        handleLogout();
        alert('Session has ended. Please login again.');
    }

    const handleRemove = (e) => {
        e.preventDefault();
        console.log(props.user)
        const id = props.user.id
        console.log(id, '<<---this is the user id')
        console.log(`${REACT_APP_SERVER_URL}/api/users/${id}`)
        axios.delete(`${REACT_APP_SERVER_URL}/api/users/${id}`)
        .then(response => {
            console.log(response)
            console.log(response.data)
            
            
        })
    }

    const userData = props.user ? 
    (<div>
        <h1>Profile</h1>
        <p><strong>Name:</strong> { name }</p> 
        <p><strong>Email:</strong> { email }</p> 
        <p><strong>ID:</strong> { id }</p>
        <aside>
        <button onClick={handleRemove}>Delete Your Account</button>
        <button>Favorite</button>
        </aside>
    </div>) : <h4>Loading...</h4>

    const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        );
    };
    
    return (
        <div>
            { props.user ? userData : errorDiv() }
        </div>
    );

}

export default Profile;
