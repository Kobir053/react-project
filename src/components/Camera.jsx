import React from "react";
import { useState } from "react";
import Picture from "./Picture";
import OpenCamera from "./OpenCamera";

export default function Camera (props) {

    const [page,setPage] = useState(1);
    const [img,setImg] = useState('');

    const showPage = ()=>{
        if(page == 1)
            return <OpenCamera setPage = {setPage} setImg = {setImg}/>
        else if(page == 2) 
            return <Picture src = {img} setPage = {setPage}/> 
    }


    return (
        <div className="videoDiv">
            {showPage()}
        </div>
    )
}