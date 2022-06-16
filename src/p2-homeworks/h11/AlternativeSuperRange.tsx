import React, {ChangeEvent, useEffect, useRef, useState} from "react";
import classnames from "classnames";
import  './AlternativeSuperRange.css'

type AlternativeSuperRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
    min: number
    onChange: Function
}

const AlternativeSuperRange: React.FC<AlternativeSuperRangePropsType> = ({min,
                                          onChange}) => {
    const [minVal, setMinVal] = useState(min);
    /*const [maxVal, setMaxVal] = useState(max);*/
    const minValRef = useRef<HTMLInputElement>(null);
    /*const maxValRef = useRef<HTMLInputElement>(null);*/
    const range = useRef<HTMLDivElement>(null);

    // Convert to percentage
   /* const getPercent = useCallback(
        (value: number) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );*/

    // Set width of the range to decrease from the left side
    /*useEffect(() => {
        if (maxValRef.current) {
            const minPercent = getPercent(minVal);
            const maxPercent = getPercent(+maxValRef.current.value); // Precede with '+' to convert the value from type string to type number

            if (range.current) {
                range.current.style.left = `${minPercent}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [minVal, getPercent]);*/

    // Set width of the range to decrease from the right side
   /* useEffect(() => {
        if (minValRef.current) {
            const minPercent = getPercent(+minValRef.current.value);
            const maxPercent = getPercent(maxVal);

            if (range.current) {
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [maxVal, getPercent]);*/

    // Get min and max values when their state changes
    useEffect(() => {
        onChange({ min: minVal });
    }, [minVal,  onChange]);

    return (
        <div className="container">
            <input
                type="range"
                min={min}

                value={minVal}
                ref={minValRef}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const value = Math.min(+event.target.value);
                    setMinVal(value);
                    event.target.value = value.toString();
                }}
                className={classnames("thumb thumb--zindex-3", )}
            />


            <div className="slider">
                <div className="slider__track"></div>
                <div ref={range} className="slider__range"></div>
                <div className="slider__left-value">{minVal}</div>
            </div>
        </div>
    );
}

export default AlternativeSuperRange