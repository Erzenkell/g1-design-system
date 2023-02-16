import React from "react";
import "./Login.css";

import TextInput from "../../components/Input/TextInput";
import Button from "../../components/Button/Button";
import Divider from "../../components/Divider/Divider";

const Login = () => {
    return (
        <div className="login">
            <div className="login_container">
                <div className="login_container_header">
                    <h1>Login</h1>
                </div>
                <div className="login_container_body">
                    <div className="login_container_form">
                        <div className="login_container_form_input">
                            <TextInput 
                                label="Email"
                                placeholder="flamin@go.com"
                            />
                        </div>
                        <div className="login_container_form_input">
                            <TextInput
                                label="Password"
                                placeholder="*****"
                        />
                        </div>
                        <div className="login_container_form_button">
                            <Button
                                label="Login"
                            />
                        </div>
                    </div>
                </div>
                <div className="login_container_footer">
                    <Divider text="or"/>
                    <div className="login_container_footer_button"> 
                        <Button 
                            label="Login with Google"    
                        />
                    </div>
                </div>       
            </div>
        </div>
    )
}

export default Login;