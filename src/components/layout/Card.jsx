import "./Card.css";
import React, { Children } from "react";


export default ({titulo,children,color}) => {
    const bg = {
        backgroundColor: color,
        borderColor: color

    }
    return(
        <div className="Card" style={bg}>
            <div className="Title" >{titulo}</div>
            <div className="Content">{children}</div>
        </div>
    )
}