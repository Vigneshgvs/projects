import React from 'react';

//function component

const Message = (props) => {
    return (
        <div>
            <h3 className="text-center message">
                {/* 
                {this.props.messageText}        This is class way of accessing props
                */}
                {props.messageText}
            </h3>
        </div>
    )
}

export default Message;
