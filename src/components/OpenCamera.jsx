import React,{useRef} from "react";
import Webcam from 'react-webcam';


export default function OpenCamera (props) {

    let image;

    const webRef = useRef(null);

    const take_a_picture = ()=>{
        image = webRef.current.getScreenshot();
            props.setImg(image);
            // console.log(img);
            props.setPage(2);
        }

    return (
        <div>
            <Webcam ref = {webRef} screenshotFormat = 'image/jpeg'/>
            <button className="snap" style={{margin: '10px'}} onClick={()=>{take_a_picture()}}>Take a Picture</button>
        </div>
    )
}