import React ,{useState} from "react";
import './email.css';

export default function EmailRestaurant(props){

    const [details,setDetails] = useState('');

    const check = ()=>{
        if(details.firstName == null || details.lastName == null || details.restaurantName == null
             || details.email == null || details.phoneNumber == null){
            alert('you must to fill your details');
            return;
        }
        if(details.firstName.length <= 1 || details.lastName.length <= 1){
            alert('incorrect Name');
            return;
        }
        else if(details.restaurantName.length <= 2){
            alert('incorrect Restaurant name');
            return;
        }
        else if(details.email.length <= 5 || details.email.indexOf('@') == -1){
            alert('incorrect Emal');
            return;
        }
        else if(details.phoneNumber.length <= 5)
            return alert('The Phone Number is too short');
        else{
            for(let i = 0;i < details.phoneNumber.length;i++)
                if(details.phoneNumber.charAt(i) < '0' || details.phoneNumber.charAt(i) > '9')
                    return alert('Incorrect Phone Number');
        }
        props.setPage(props.page + 1);
    }


    return (
        <div id="emailDiv">
            <h1>Interesting to join our Revolution?</h1>
            <input type ='text' className="details" required='required' onChange={(element)=>{setDetails({...details,firstName: element.target.value})}} placeholder="Enter your First name"/> <br/>
            <input type ='text' className="details" required='required' onChange={(element)=>{setDetails({...details,lastName: element.target.value})}} placeholder="Enter your Last name"/> <br/>
            <input type ='text' className="details" required='required' onChange={(element)=>{setDetails({...details,restaurantName: element.target.value})}} placeholder="Enter the Restaurant name"/> <br/>
            <input type ="email" className="details" required='required' onChange={(element)=>{setDetails({...details,email: element.target.value})}} placeholder="Enter your Email"/> <br/>
            <input type ="text" className="details" required='required' onChange={(element)=>{setDetails({...details,phoneNumber: element.target.value})}} placeholder="Enter your Phone number"/> <br/>
            <button onClick={()=>{check()}}>Send Email</button>
            <button onClick={()=>{props.setPage(props.page + 1)}}> continue</button>
        </div>
    )
}