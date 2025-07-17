import React, { use, useState } from 'react';
import Input from './form/Input';
import { useNavigate, useOutletContext } from 'react-router';

const Login = () => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const {setJwtToken} = useOutletContext();
    const {setAlertClassName} = useOutletContext();
    const {setAlertMessage} = useOutletContext();

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
        if (email === "sajjad@email.com") {
            // Perform login
            setJwtToken("dummy-jwt-token");
            setAlertClassName("d-none");
            setAlertMessage("");
            navigate("/");
        }else{
            setAlertClassName("alert-danger");
            setAlertMessage("Login failed!");
        }
    }

    return (
        <div className="col-md-6 offset-md-3">
            <h2>Login</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <Input
                    title="Email Address"
                    type="email"
                    className="form-control"
                    name="email"
                    autoComplete="email-new"
                    onChange={(event) => setEmail(event.target.value)}
                />

                <Input
                    title="Password"
                    type="password"
                    className="form-control"
                    name="password"
                    autoComplete="password-new"
                    onChange={(event) => setPassword(event.target.value)}
                />

                <hr />

                <input 
                    type="submit"
                    className="btn btn-primary"
                    value="Login"
                />


            </form>
        </div>
    );
}

export default Login;
