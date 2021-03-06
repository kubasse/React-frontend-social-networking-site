import React from 'react';
import { useInput } from '../hooks/useInput';
import axios from 'axios';
import { useHistory } from "react-router-dom";

export function SignUp(props) {
    const history = useHistory();
    const { value:userName, bind:bindUserName } = useInput('');
    const { value:userPasswd, bind:bindUserPasswd } = useInput('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Subbmitint username ${userName} password ${userPasswd}`);

        const user = {
            userName,
            userPasswd
        }

        axios.post('http://localhost:8000/users/signUp', user)
        .then(res => sessionStorage.setItem("token", res.data.token))
        .catch(err => {
            console.error(err);
        })

        history.push('/');
    }

    return(   
        <div className="d-flex justify-content-center m-4">
            <div className="card">
                <div className="card-body text-center">
                    <h5 className="card-title m-4">Register</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="mx-4">
                            <label htmlFor="username" className="form-label"> Username </label> <br/>
                            <input id="username" type="text"  className="form-control" aria-describedby="userHelp" {...bindUserName}/> <br/>
                            <div id="userHelp" className="form-text mb-4">This wil be your username choose wisely!</div>
                        </div>
                        <div className="mx-4">
                            <label htmlFor="password" className="form-label"> Password </label> <br/>
                            <input id="password" type="password" className="form-control" aria-describedby="passwordHelp" {...bindUserPasswd}/> <br/>
                            <div id="passwordHelp" className="form-text">This wil be your password choose wisely!</div>
                        </div>
                        <input type="submit" className="btn btn-secondary mx-3 mt-5 mb-4" value="Register!"/>                        
                    </form>
                </div>
            </div>
        </div>   
    )    
}

export default SignUp;