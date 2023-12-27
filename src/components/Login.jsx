import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post('http://localhost:3002/login', {
                email: email,
                password: password,
            });

            console.log(response);
            navigate('/home');
            if (response === "Login successful") {
              console.log("hdugdecbd");
            }
        } catch (error) {
            console.error(error);
            setError('Invalid email or password. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={(e) => handleLogin(e)}>
                <label>Email:</label>
                <input type="email" name="email" placeholder="Enter your Email address" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
                <label>Password:</label>
                <input type="password" name="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br />
                <button type="submit" disabled={loading}>Login</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <p>Create an Account
                    <Link to="/register">Register</Link>
                </p>
                
            </form>
        </div>
    );
}

export default Login;
