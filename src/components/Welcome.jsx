import React from "react";

export default function Welcome(props){


    return (
        <div >
            <h1 style={{color: 'rgb(255,255,255)',marginTop: '0'}}>WELCOME TO LATWO</h1>
            <h3 style={{color: 'rgb(255,255,255)',paddingBottom: '50px'}}>Lorem ipsum, dolor sit amet consectetur  adipisicing elit.<br/> Esse fugit impedit enim culpa praesentium quo numquam.<br/> Maiores, libero omnis ducimus possimus doloribus asperiores accusamus<br/> voluptas! Atque consequuntur pariatur odit inventore.</h3>
            <button onClick={()=>{props.setPage(props.page + 1)}}>Continue</button>
        </div>
    )
}