import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import users from '../../Assets/user.png'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

import { CustomInput } from '../custom-input/CustomInput'
import { useSelector } from 'react-redux';


export const UserProfile = () => {
    const { user } = useSelector((state) => state.user);
    const { resume } = useSelector((state) => state.resume);
    const [frm, setFrm] = useState({})
    const inputs = [
        {
            value: frm.fname,
            label :"First Name",
            name :"fname",
            type:"text",
            required: true,
            placeholder:"Enter f-name"

        },
        {
            value: frm.lname,
            label :"Last Name",
            name :"lname",
            type:"text",
            required:true,
            placeholder:"Enter l-name"

        },
        {
            value: frm.Address,
            label :"Address ",
            name :"address",
            type:"text",
            required:true,
            placeholder:"Enter Address"

        },
        {
            value: frm.Summary,
            label :"Summary ",
            name :"summary",
            type:"text",
            required:true,
            placeholder:"Enter Summary"

        },
        {
            value: frm.Education,
            label :"Education ",
            name :"education",
            type:"text",
            required:true,
            placeholder:"Enter Education"

        },
        {
            value: frm.Exprience,
            label :"Exprience ",
            name :"exprience",
            type:"number",
            required:true,
            placeholder:"Enter Exprience"

        },
        {
            value: frm.Resume,
            label :"Resume ",
            name :"resume",
            type:"file",
            required:true,

        },


    ]
    const navigate = useNavigate();

    console.log("oo",resume);
 



  return (

   <Container  className= ' mt-5 w-75 p-3 shadow  justify-content-between align-items-center'>
     
     <h2 className='text-center' > My Profile</h2>

     <div className='d-flex gap-3 align-items-center justify-content-between'>
     <img className='user-img ' src={users} alt='user'/>

     
     <div className='profile-info d-flex m-auto  flex-column flex-wrap align-items-start justify-content-start'>
     <div className='d-flex justify-content-start align-items-center flex-wrap' >
         <h6>Name:</h6>&nbsp; 
         <h6>{user.fname} {user.lname}</h6>
       </div>

       <div className='d-flex justify-content-start align-items-center' >
         <h6>Email:</h6>&nbsp; 
         <h6>{user.email}</h6>
       </div>

       <div className='d-flex justify-content-start align-items-center' >
         <h6>Contact No.:</h6>&nbsp; 
         <h6>{user.contact}</h6>
       </div>  

     </div>

     </div>

     <hr/>

     <Link to="/user/resume" className=''> <Button className='rounded-pill' variant="success">Add Resume </Button> </Link>

    

 </Container>
 
  )
}
