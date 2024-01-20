import React from 'react';
import './LoginForm.css';
import PhoneNumberInput from './PhoneNumberInput';
import { FaBirthdayCake } from "react-icons/fa"
import { FaPhone } from "react-icons/fa";
import { IoIosAlarm } from "react-icons/io";
;


const LoginForm = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Set up your Time Capsules</h1>
                <div className="input-box">
                <PhoneNumberInput className ='icon' />
                <FaPhone className = 'icon' />
                </div>
                <div className="input-box">
                    <input type="number" placeholder='Age' min="1" max="120" required />
                    <FaBirthdayCake className ='icon'/>
                </div>
                <div className="input-box">
                    <input type="number" placeholder='Wake up time' min="1" max="120" required />
                    <IoIosAlarm className ='icon'/>
                </div>
                <button type="submit">Begin</button>

            </form>
        </div>
    )
}

export default LoginForm;