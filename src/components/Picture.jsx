import React from "react";

export default function Picture (props) {


    return (
        <div>
            <img src = {props.src}/>
            <button onClick={()=>{props.setPage(1)}}>Retake</button>
        </div>
    )
}