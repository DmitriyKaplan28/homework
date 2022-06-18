import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import AlternativeSuperRange from "./AlternativeSuperRange";
import AlternativeSuperDoubleRange from "./AlternativeSuperDoubleRange";

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const [value, setValue] = useState<number[]>([value1, value2]);

    /*const onChangeRange = (value: number) => {
        setValue1(value)
    }*/
    const onChangeRange = (newValue: number) => {
        setValue((value) => {
            const copy = [...value];
            copy[0] = newValue
            return copy
        });
    }




    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);

    };

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange value={value1}
                            onChangeRange={onChangeRange}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange value={value}
                                  handleChange={handleChange}
                    //valuetext={valuetext}
                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange
                min={value1}
                onChange={({ min}: { min: number }) =>
                    console.log(`min = ${min}`)
                }
            />*/}
            {/*<AlternativeSuperDoubleRange min={value1}
                                         max={value2}
                                         onChange={({min, max}: { min: number; max: number }) =>
                                             console.log(`min = ${min}, max = ${max}`)
                                         }/>*/}
            <hr/>
        </div>
    )
}

export default HW11
