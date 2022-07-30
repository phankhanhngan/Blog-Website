import React, {useState} from 'react';
import './login_register.css'
import 'antd/dist/antd.css';
import {Button, Form, Input} from "antd";

function LoginRegister() {
    const [isRegister, setIsRegister] = useState(false);
    function handleRegisterClick() {
        setIsRegister(true);
    }
    function handleBackToLoginClick() {
        setIsRegister(false);
    }
    return (
        <div className="login">
            <img src="https://img.freepik.com/premium-vector/stay-home-young-man-working-laptop-computer-home-freelance-work-home-remote-work-home-office-vector-illustration-flat-style_213307-189.jpg?w=2000"
                 alt="" className="loginImg"/>
            <div className="loginWrapper">
                {!isRegister && <span className="loginRegis register" onClick={handleRegisterClick}>You're new? Create account now!</span>}
                {isRegister && <span className="loginRegis backToLogin" onClick={handleBackToLoginClick}>Back to Login</span>}
                <span className="label">{isRegister ? "Let's Join!" : "Let's Write"}</span>
                <form action="" className="inputForm">
                    {isRegister && <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>}
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password/>
                    </Form.Item>
                </form>
                <Button className="buttonLogin">{isRegister ? "Register" : "Login"}</Button>
            </div>

        </div>
    );
}

export default LoginRegister;