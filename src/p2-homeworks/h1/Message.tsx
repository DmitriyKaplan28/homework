import React from 'react'
import s from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={s.message}>
            <img src={props.avatar} alt={'avatar'} className={s.avatar}/>
            <div className={s.name}>{props.name}</div>
            <div className={s.content}>{props.message}</div>
            <div className={s.time}>{props.time}</div>
        </div>

    )
}

export default Message
