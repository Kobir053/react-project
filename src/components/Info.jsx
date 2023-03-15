import React from "react";
import './info.css'
import { useState } from 'react'
import Camera from "./Camera";
// import './camera.js'


export default function Info(props){

    // const [details,setDetails] = useState('');
    // const [hours,sethours] = useState({open: [],close: []});

    const check = ()=>{
        if(props.details.firstName == null || props.details.lastName == null || props.details.restaurant == null
             || props.details.city == null || props.details.address == null){
            alert('you must to fill your details');
            return false;
        }
        if(props.details.firstName.length <= 1 || props.details.lastName.length <= 1){
            alert('incorrect Name');
            return false;
        }
        else if(props.details.restaurant.length <= 2){
            alert('incorrect Restaurant name');
            return false;
        }
        else if(props.details.city.length <= 2 || props.details.address.length <= 4){
            alert('incorrect address');
            return false;
        }
        else 
            return true;
    }

    const update = ()=>{
        if(check() == false)
            return;
        let temp;
        for(let i = 1;i <= 7;i++){
            temp = document.getElementById(`open-${i}`).value;
            if(temp == ''){
                return alert('You have to enter the hours of opening & closing. \n if you are close at some of the days, just write "close"')
            }
            props.hours.open.push(temp);
            props.sethours({...props.hours})
        }
        console.log(props.hours.open);
        for(let i = 1;i <= 7;i++){
            temp = document.getElementById(`close-${i}`).value;
            if(temp == ''){
                return alert('You have to enter the hours of opening & closing. \n if you are close at some of the days, just write "close"')
            }
            props.hours.close.push(temp);
            props.sethours({...props.hours})
        }
        console.log(props.hours.close);
        props.setDetails({...props.details,hours: props.hours});
        console.log(props.details.hours.open[3]);
        return;
    }


    return (

            <div width='100%' height='100'>
                <input type ='text' placeholder="First name" className="details" onChange={(el)=>{props.setDetails({...props.details,firstName: el.target.value})}}/><br/>
                <input type ='text' placeholder="Last name" className="details" onChange={(el)=>{props.setDetails({...props.details,lastName: el.target.value})}}/><br/>
                <input type ='text' placeholder="Restaurant name" className="details" onChange={(el)=>{props.setDetails({...props.details,restaurant: el.target.value})}}/><br/>
                <input type ='text' placeholder="City" className="details" onChange={(el)=>{props.setDetails({...props.details,city: el.target.value})}}/><br/>
                <input type ='text' placeholder="Address" className="details" onChange={(el)=>{props.setDetails({...props.details,address: el.target.value})}}/><br/>
                <table>
                    <tr>
                        <td style={{color: 'blue'}}>HOURS</td>
                        <td>Sunday</td>
                        <td>Monday</td>
                        <td>Tuesday</td>
                        <td>Wednesday</td>
                        <td>Thursday</td>
                        <td>Friday</td>
                        <td>Saturday</td>
                    </tr>
                    <tr>
                        <td>Open</td>
                        <td><input type = 'text' id="open-1" className="table-input"/></td>
                        <td><input type = 'text' id="open-2" className="table-input"/></td>
                        <td><input type = 'text' id="open-3" className="table-input"/></td>
                        <td><input type = 'text' id="open-4" className="table-input"/></td>
                        <td><input type = 'text' id="open-5" className="table-input"/></td>
                        <td><input type = 'text' id="open-6" className="table-input"/></td>
                        <td><input type = 'text' id="open-7" className="table-input"/></td>
                    </tr>
                    <tr>
                        <td>Close</td>
                        <td><input type = 'text' id="close-1" className="table-input"/></td>
                        <td><input type = 'text' id="close-2" className="table-input"/></td>
                        <td><input type = 'text' id="close-3" className="table-input"/></td>
                        <td><input type = 'text' id="close-4" className="table-input"/></td>
                        <td><input type = 'text' id="close-5" className="table-input"/></td>
                        <td><input type = 'text' id="close-6" className="table-input"/></td>
                        <td><input type = 'text' id="close-7" className="table-input"/></td>
                    </tr>
                </table>
                <button onClick={()=>{update()}}>Save</button>
                
                <h2>MENU</h2>
                <h4>Do you have a photos of your menu<br/>or you want to take a picture?</h4>
                <button onClick ={()=>{props.setPage(2)}}>Camera</button> 
                {/* <canvas className="canvas" width='640' height ='480'></canvas>*/}
                <button>Add file</button>

                {/* {cameraFunc} */}
            </div>
            


    )
}