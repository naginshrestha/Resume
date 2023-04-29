import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import users from '../../Assets/user.png'
import { toast } from "react-toastify";

import { CustomInput } from '../custom-input/CustomInput'


export const UserProfile = () => {
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
            type:"exprience",
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

    const handleChanged =(e)=>{
        const {name , value} = e.target;

        setFrm({...frm,[name]: value,});
    }

    const handleOnSubmit =async(e) =>{
        e.preventDefault();

        console.log("jh",frm)

        try {
          
       
            
        } catch (error) {
            toast.error(error.message)
            
        }
    }



  return (
    <Container onSubmit={handleOnSubmit} className='mt-5 w-75 p-3 shadow  justify-content-between align-items-center'>
        <h2 className='text-center' > My Profile</h2>

        <div className='d-flex gap-3 align-items-center justify-content-between'>
        <img className='user-img ' src={users} alt='user'/>

        
        <div className='profile-info d-flex m-auto  flex-column flex-wrap align-items-start justify-content-start'>
        <div className='d-flex justify-content-start align-items-center flex-wrap' >
            <h6>Name:</h6>&nbsp; 
            {/* <h6>{user.fname} {user.lname}</h6> */}
          </div>

          <div className='d-flex justify-content-start align-items-center' >
            <h6>Email:</h6>&nbsp; 
            {/* <h6>{user.email}</h6> */}
          </div>

          <div className='d-flex justify-content-start align-items-center' >
            <h6>Contact No.:</h6>&nbsp; 
            {/* <h6>{user.contactno}</h6> */}
          </div>  

        </div>

        </div>

        <hr/>

        {
                        inputs.map((item,i)=> (
                            <CustomInput className='rounded-pill ' onChange={handleChanged} key={i} {...item} on/>

                        ))

        }
   
   <div className='d-grid m-auto '>
   <Button className='mt-4 rounded-pill' type='submit' variant="success ">Sumit</Button>

   </div>
     


    </Container>
  )
}
