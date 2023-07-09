import React from "react";
import { useState } from 'react'
import {Link} from 'react-router-dom';
import './Signin.css';
import img from '../component/school.png';
import {useSignupMutation} from "../services/appApi"
import { Alert } from "react-bootstrap";
//The sign in page
function Signin() {
	const [email, setEmail] = useState('')
	const [surname, setSurname] = useState('')
    const [name, setName] = useState('')
	const [number, setNumber] = useState('')
    const [signup, { error, isError }] = useSignupMutation();
    const [username,setUsername] = useState('');
   
    //The sign in function to handle the form
    function handleSignup(e) {
        e.preventDefault();
        signup({ name, number,email, surname }).then(result=>{
            if(result.data){
                setUsername(result.data.username)
            }
        }    
        )
    }
	return(
        <div className="form1">
			<div className="h">
            <p>sign in form</p>
			<img src={img} alt="Img" />
			</div>
            <div className="form2">
            <form onSubmit={handleSignup} >
            <h3>Sign In</h3>
            
            {isError && <Alert variant="danger">{error.data}</Alert>}
            <div className="form-group">
            <label className="label"> name </label>
            <input type="text" value={name} className="form-control" placeholder="Enter Your Name"
                 onChange={(e) => setName(e.target.value)}
            />
            </div>
           
            <div className="form-group">
            <label className="label"> Surname </label>
            <input type="text" value={surname} className="form-control" placeholder="Enter your surname"
                onChange={(e) => setSurname(e.target.value)}
            />
            </div>

            <div className="form-group">
            <label className="label">Number </label>
            <input type="text" value={number} className="form-control" placeholder="Enter your number"
                 onChange={(e) => setNumber(e.target.value)}
            />
            </div>

            <div className="form-group">
            <label className="label"> Email </label>
            <input type="email" value={email} className="form-control" placeholder="Enter your Email"
                 onChange={(e) => setEmail(e.target.value)}
            />
            </div>
           <p id="login"> <input type="submit" value="sign in" className="login"/></p>
			<p> Have account <Link to="/login"className="Link" > Login </Link> </p>
			
            </form>
            </div>
        </div>
    )
}

export default Signin