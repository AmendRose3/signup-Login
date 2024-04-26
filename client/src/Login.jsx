import React, { useState } from 'react'; // Import React and useState
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
    
        // Send a POST request to the server with user's email and password
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result);
                // If the login is successful (server responds with "Success")
                if (result.data === "Success") {
                    navigate('/home'); // Redirect the user to the home page
                }
            })
            .catch(err => console.log(err)); // Log any errors
    };
    

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            className="form-control rounded-0"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Login
                    </button>
                    <p>Don't have an account? <Link to="/register">Signup</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Login;
