import React, {ChangeEvent, useState} from 'react';
import {checkboxAPI} from "../api/HW13-api";

export const Request = () => {
    const [success, setSuccess] = useState<boolean>(true)

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setSuccess(e.currentTarget.checked)
    }

    const handleClick = () => {
        checkboxAPI.sendSuccess(success)
    }

    return <div>
        <input type='checkbox' checked={success} onChange={handleChange}/>
        <button onClick={handleClick}>+</button>
    </div>
};

