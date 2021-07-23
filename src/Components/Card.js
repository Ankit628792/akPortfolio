import React from 'react'

function Card({i,title, desc}) {
    return (
        <div className="card">
        <div className="box">
            <div className="box__content">
                <h2>{i}</h2>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    </div>
    )
}

export default Card
