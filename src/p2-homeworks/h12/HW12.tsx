import React, {ChangeEvent} from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, ThemeStateType} from "./bll/themeReducer";


function HW12() {

    const {theme, themes} = useSelector<AppStoreType, ThemeStateType>(state => state.theme)

    const dispatch = useDispatch()
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeThemeC(e.currentTarget.value))
    }

    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            <SuperSelect options={themes}
                         value={theme}
                         onChange={onChangeHandler}/>

            {/*or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
