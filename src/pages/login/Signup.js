import React from 'react'
import { AdminLayout } from '../../components/layout/AdminLayout'
import { useState } from 'react'
import { useDispatch } from "react-redux";
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { createUserWithEmailAndPassword,updateCurrentUser,updateProfile,} from "firebase/auth";
import { auth, db } from '../../firebase-config/firebase-config';
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import PhoneInput from 'react-phone-number-input'
import { CustomInput } from '../../components/custom-input/CustomInput';
import { toast } from "react-toastify";
import { setUser } from "../../slice/userSlice";



const initialState ={
    fname :"",
    lname :"",
    email:"",
    password:"",
    confirmpassword:"",
    role:"user"

}

const Signup = () => {
    const [frm, setFrm] = useState(initialState)
    const [value, setValue] = useState()
    const [error,setError] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const reginputs = [
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
            value: frm.contact,
            label :"Contact number",
            name :"contact",
            type:"number",
            required:true,
            placeholder:"Enter contact no"

        },
        {
            value: frm.email,
            label :"Email",
            name :"email",
            type:"email",
            required:true,
            placeholder:"Enter email"
        },
        {
            value: frm.password,
            label :"Password",
            name :"password",
            type:"password",
            required:true,
            placeholder:"Enter password"
        },
        {
            value: frm.confirmpassword,
            label :"Confirm Password",
            name :"confirmpassword",
            type:"password",
            required:true,
            placeholder:"Re-enter password"
        }
    ]

    const handleChanged =(e)=>{
        const {name , value} = e.target;


        if(name === "password")
        {
            setError("");

            value.length < 8 && setError("Password must be at least 8 characters long");
            !/[0-9]/.test(value) && setError("Number is required");
            !/[A-Z]/.test(value) && setError("Upper case is required");
            !/[a-z]/.test(value) && setError("Lower case is required");

            setFrm ({...frm,[name]: value});


        }

        if (name ==="email"){
            setError('');

            !/^\S+@\S+\.\S+$/.test(value) && setError("Invalid email address")
            setFrm ({...frm,[name]: value});
        }

        setFrm({...frm,[name]: value,});
    }

    const handleSumit =async(e) =>{
        e.preventDefault();



        try {
          
            const {confirmpassword, password, email, fname , lname,contact} = frm;

            if(frm.confirmpassword !== frm.password)
            {
                return toast.error("Password do not match");
            }


            const userPending = createUserWithEmailAndPassword (auth, email, password)
            toast.promise(userPending, {
                pending: "please wait",
              });
             const { user } = await userPending;

             if (user?.uid) {
                updateProfile(user, {
                  displayName: fname,
                  role: frm.role,
                });
              }

              const obj = {
                email,
                fname,
                lname,
                contact,
                role: frm.role,
              };


             console.log("ff",obj);
              await setDoc(doc(db, "users", user.uid), obj);
              dispatch(setUser({ ...obj, uid: user.uid, role: frm.role }));


              toast.success("Sign up successfully, redirecting to dashboard");
              setTimeout(() => {
                navigate("/");
              }, 3000);
            
        } catch (error) {
            toast.error(error.message)
            
        }
    }



  return (
    <AdminLayout>
    <div className='d-grid login-container'>
        <Form  onSubmit={handleSumit}  className='shadow p-4  mt-5 w-75 m-auto justify-content-center align-items-center ' >
        <h2 className='text-center'>Sign Up Here</h2>
        <hr/>


        <Form.Group className="mb-3">
              <label htmlFor="" className="mb-2">
                Account Type:
              </label>
              <Form.Select name="role" >
                <option value="">-- select user type --</option>
                <option value="Employee">Employee</option>
                <option value="Employer">Employer</option>
              </Form.Select>
            </Form.Group>
        {
            reginputs.map((item,i)=> (
          
           <CustomInput key={i} {...item} onChange={handleChanged}/>

                ))
        }

        <Form.Group>
            <Form.Text disabled={error} >
                Your Password must contain at least 6 characters including atleast 1 number, 1 uppercase amd lower case
            </Form.Text>

            {error && (
                <ul>
                    <li className='text-danger fw-bolder mt-2'>{error}</li>
                </ul>
            )
            }
        </Form.Group>

        <div className='d-grid mt-3 bg-success border-0 rounded'>
            <Button disabled={error} className='bg-success border-0 rounded' type='submit' >SignUp</Button>

        </div>
        <div className='d-grid mt-1 '>
        <p className='text-end'>Already have account ? <a>signin</a> </p>
        </div>

     
        </Form>

    </div>
    </AdminLayout>
  )
}

export default Signup