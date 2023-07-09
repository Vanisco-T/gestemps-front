import React from "react";
import { useState } from 'react'
import {Link} from 'react-router-dom';
import './Login.css';
import img from '../component/school.png';
import { useLoginMutation } from "../services/appApi";
import { Alert } from "react-bootstrap";
//The log in page
function Login() {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
    const [login, { isError, error }] = useLoginMutation();

    //function to handle log in
	function handleLogin(e) {
        e.preventDefault();
        login({ username, password });
    }
	return(
        <div className="form1">
			<div className="h">
            <p>Log in Form</p>
			<img src={img} alt="Img" />
			</div>
            <div className="form2">
            <form onSubmit={handleLogin} >
            <h3>Log In</h3>
    
            {isError && <Alert variant="danger">{error.data}</Alert>}
            <div className="form-group">
            <label className="label"> Email</label>
            <input type="email" value={username} className="form-control" placeholder="Enter your Email"
                 onChange={(e) => setUsername(e.target.value)}
            />
            </div>
    
            <div className="form-group">
            <label className="label"> Password </label>
            <input type="password" value={password} className="form-control" placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <p id="login">  <input type="submit" value="Log in" className="login"/></p>
			<p> "forget password ?" <Link to="/password"className="Link" > Reset password </Link>
            OR <Link to="/signin"className="Link" > Create Account </Link>
             </p>

			
            </form>
            </div>
        </div>
    )
}

export default Login