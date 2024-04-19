import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Loginpage() {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({ aadharno: "", password: "" });

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ aadharno: credentials.aadharno, password: credentials.password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            localStorage.setItem('token', json.aadharno);
            alert("You have successfully logged in");
            navigate("/");
        } else {
            alert("Invalid credentials");
        }
    }

    return (
        <div className="container-fluid d-flex justify-content-center p-5">
            <div className="card  shadow p-4">
                <h1 className="card-title text-center mb-4">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="aadharno" className="form-label fw-bold">Aadhaar No:</label>
                        <input type="text" className="form-control" id="aadharno" name="aadharno" aria-describedby="emailHelp" required value={credentials.aadharno} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label fw-bold">Password</label>
                        <input type="password" className="form-control" id="password" name="password" required value={credentials.password} onChange={onChange} />
                    </div>
                    <button type="submit" className="btn btn-outline-primary">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Loginpage;
