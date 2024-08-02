import React from 'react'

function Button({ text }) {
    return (
        <button className="btn" type="button">
            <span>
                {text}
            </span>
        </button>
    )
}

export default Button
