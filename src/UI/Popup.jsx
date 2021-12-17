import React from 'react'

export const Popup = ({title, text, actionClose}) => {
    return (
        <div className="popup">
            <div className="popup__content">
                <div className="popup__header">
                    <span onClick={() => actionClose && actionClose(false)}>X</span>
                </div>
                <div className="popup__content-text">
                    <div className="popup__title">{title ?? 'Some title'}</div>
                    <div className="popup__descr">{text ?? 'Some descr'}</div>
                </div>
            </div>
            <div onClick={() => actionClose && actionClose(false)} className="popup__bg"></div>
        </div>
    )
}