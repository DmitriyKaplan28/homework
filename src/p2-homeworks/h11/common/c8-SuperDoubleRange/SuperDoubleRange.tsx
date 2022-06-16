import React, {ChangeEvent, useCallback, useEffect, useRef, useState} from 'react'
import classnames from "classnames";
import  './SuperDoubleRange.css'
import {Box, Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    value: number[]
    handleChange: (event: Event, newValue: number | number[]) => void
    //valuetext: (value: number) => void
    // min, max, step, disable, ...

}

function valuetext(value: number) {
    return `${value}°C`;
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {value, handleChange, /*valuetext*/
        /*onChangeRange, value,
        // min, max, step, disable, ...*/
    }
) => {
    // сделать самому, можно подключать библиотеки

    return (
        <Box sx={{ width: 300}}>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
            />
        </Box>
    )
}

export default SuperDoubleRange
