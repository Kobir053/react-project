import React, { useState } from "react";
import Info from "./Info";
import Camera from "./Camera";

export default function InfoAndMenu () {

    const [details,setDetails] = useState('');
    const [hours,sethours] = useState({open: [],close: []});

    const [page,setPage] = useState(1);

    const showPage = ()=>{
        if(page == 1)
            return <Info details = {details} setDetails = {setDetails} hours = {hours} sethours = {sethours} setPage = {setPage}/>
        else if(page == 2)
            return <Camera/>
    }

    const cameraFunc = ()=>{
        // let canvas = document.querySelector('.canvas');
        // let context = canvas.getContext('2d');
        let video = document.querySelector('.video');
    
        if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
            navigator.mediaDevices.getUserMedia({video: true}).then((stream)=>{
                video.srcObject = stream;
                video.play();
            })
        }
        // document.querySelector('.videoDiv').style.display = 'block';
    
        // document.querySelector('.snap').addEventListener('click',()=>{
        //     context.drawImage(video,0,0,640,480)
        // })
    }


    return (
        <div>
            {showPage()}
        </div>
    )
}