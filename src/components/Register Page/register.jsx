// Register.jsx
import './register.css';
import chicken from '../Food_img/pizzabackground.png';
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Register({ setHome }) {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loginMode, setLoginMode] = useState(false);

    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    function togglePassword() {
        setPasswordVisible(!passwordVisible);
    }

    function toggleForm() {
        setLoginMode(!loginMode);
    }

    function handleRegister() {
        if (registerEmail.length > 3 && registerPassword.length > 3) {
            toast.success("Registered successfully!");
            toggleForm();
        } else {
            toast.error("Please enter valid email and password");
        }
    }

    function handleLogin() {
        if (loginEmail.length > 3 && loginPassword.length > 3) {
            if (registerEmail === loginEmail && registerPassword === loginPassword) {
                toast.success("Login successful!");
                setHome(1);
            } else {
                toast.error("Incorrect email or password");
            }
        } else {
            toast.error("Please enter valid login credentials");
        }
    }

    return (
        <div className="register-overall">
            {!loginMode ? (
                <form>
                    <h1>Register</h1>
                    <label>Name</label>
                    <input type="text" placeholder='Enter Your Name...' required />
                    <label>Email Address</label>
                    <input type="email" placeholder='Enter Your Email...' onChange={(e) => setRegisterEmail(e.target.value)} required />
                    <label>Password</label>
                    <div className="password-box">
                        <input type={passwordVisible ? "text" : "password"} placeholder='Enter Your Password...' onChange={(e) => setRegisterPassword(e.target.value)} required />
                        <h2 className='pasword-eye' onClick={togglePassword}>
                            {passwordVisible ? <IoEyeSharp /> : <FaEyeSlash />}
                        </h2>
                    </div>
                    <p>Already have an account? <span className='login-link' onClick={toggleForm}>Login</span></p>
                    <button type="button" className='register-btn from-btn' onClick={handleRegister}>Register</button>
                </form>
            ) : (
                <form>
                    <h1>Login</h1>
                    <label>Email Address</label>
                    <input type="email" placeholder='Enter Your Email...' onChange={(e) => setLoginEmail(e.target.value)} required />
                    <label>Password</label>
                    <div className="password-box">
                        <input type={passwordVisible ? "text" : "password"} placeholder='Enter Your Password...' onChange={(e) => setLoginPassword(e.target.value)} required />
                        <h2 className='pasword-eye' onClick={togglePassword}>
                            {passwordVisible ? <IoEyeSharp /> : <FaEyeSlash />}
                        </h2>
                    </div>
                    <p>Don't have an account? <span className='login-link' onClick={toggleForm}>Register</span></p>
                    <button type="button" className='register-btn from-btn' onClick={handleLogin}>Login</button>
                </form>
            )}
            <img src={chicken} alt="background" />
        </div>
    );
}
