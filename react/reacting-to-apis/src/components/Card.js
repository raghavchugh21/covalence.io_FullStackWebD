import React from 'react';

const Card = props => {
    let dic = {width: '18rem'};
    return (
        <div className="card" style={dic}>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.director}</h6>
                <p className="card-text">{props.desc}</p>
            </div>
        </div>
    );
}

export default Card;