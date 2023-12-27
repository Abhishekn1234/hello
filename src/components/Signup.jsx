import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post("http://localhost:3002/register", {
                username: username,
                email: email,
                password: password,
            });
        
            console.log(response.data);
            navigate('/login');
            if (response.data.user === "Successfully registered") {
                console.log("hello")
            }
        } catch (error) {
            if (error.response && error.response.status === 409) {
                setError('User with the same email or username already exists. Please use a different email or username.');
            } else {
                console.error(error);
                setError('An error occurred during registration. Please try again.');
            }
        } finally {
            setLoading(false);
        }
        
    };

    return (
        <>
            <form onSubmit={(e) => handleSignup(e)}>
                <label>Username:</label>
                <input type="text" name="username" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} required /><br />
                <label>Email:</label>
                <input type="email" name="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
                <label>Password:</label>
                <input type="password" name="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br />
                <button type="submit" disabled={loading}>Register</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <p>Already a User
                    <Link to="/login">Login</Link>
                </p>
            </form>
        </>
    );
}

export default Signup;
