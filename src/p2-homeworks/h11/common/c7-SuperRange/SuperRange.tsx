import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperRange.module.css'
import {Box, Slider} from "@mui/material";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange?: (event: Event, newValue: number ) => void
    value: number
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRange,
        className,
        value,
        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        //onChange && onChange(e) // сохраняем старую функциональность

        onChangeRange
    }

    /*const finalRangeClassName = `${s.range} ${className ? className : ''}`*/
    function valuetext(value: number) {
        return `${value}°C`;
    }

    return (

        <Box sx={{width: 300}}>
            <Slider getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={onChangeCallback}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
            />
        </Box>
        /*<>
            <input
                type={'range'}
                onChange={onChangeCallback}
                className={finalRangeClassName}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
        </>*/
    )
}

export default SuperRange
