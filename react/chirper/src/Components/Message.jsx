import React from 'react';

const Message = (props) => {
    return (
        <div className="media">
            <img className="mr-3" src={props.src} alt="{props.name} 's Profile" />
            <div className="media-body">
                <h5 className="mt-0">{props.head}</h5>
                {props.msg}
            </div>
        </div>
    );
}

export default Message;