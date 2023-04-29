import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { AdminLayout } from '../../components/layout/AdminLayout'
import { useState } from 'react'
import { CustomInput } from '../../components/custom-input/CustomInput'
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { userAction } from "../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase-config/firebase-config";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";




export const Signin = () => {
  const [frmDt,setFrmDt]= useState({})
  const inputs = [
    {
        
        label :"Email",
        name :"email",
        type:"email",
        required:true,
        placeholder:"Enter email"
    },
    {
        label :"Password",
        name :"password",
        type:"password",
        required:true,
        placeholder:"Enter password"
    }
]
const navigate = useNavigate();
const dispatch = useDispatch();
const handleChanged =(e) =>{
  const {name,value} = e.target;

  setFrmDt({...frmDt,[name]:value})
  
}
const handleSumit = async(e)=>{
  e.preventDefault(); 

  console.log("kk",frmDt);
  try {

      const {password,email} = frmDt;
      const userPending = signInWithEmailAndPassword(auth, email, password);

      toast.promise(userPending, {
        pending: "please wait",
      });

      const { user } = await userPending;

      const { uid } = user;
      dispatch(userAction(uid));
      navigate("/");

      
  } catch (error) {
      toast.error("Error, invalid login details!");

  }

}
  return (
    <AdminLayout>
           <div className='d-grid login-container'>

<Form onSubmit={handleSumit}   className='shadow m-auto p-5 mt-5 w-75 justify-content-center align-items-center ' >
<h2 className='text-center'>Welcome to Resume</h2>
<hr/>
{
    inputs.map((item,i)=> (

 
            <CustomInput key={i} {...item} onChange={handleChanged}/>

        


     
    ))
}
<div className=' mt-3 d-flex text-end '>
Forget Password?<Link to="/resetpassword" className="nav-link ">Reset</Link>

</div>
<div className='d-grid mt-2 border-0 rounded'>
    <Button type='submit' className='bg-success border-0 rounded'>SignIn</Button>
</div>
</Form>

      </div>
    </AdminLayout>
  )
}
