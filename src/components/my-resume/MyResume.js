import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import {addResumeAction} from '../../actions/actionResume'

export const MyResume = () => {
    const { user } = useSelector((state) => state.user);

    const [skill, setSkill] = useState('');
    const [skills, setSkills] = useState([]);
    const [city, setCity] = useState('');
    const [sunmmary, setSummary] = useState('');
    const [data, setData] = useState({});
    const dispatch = useDispatch();



    const [resumeData,setResumeData] =useState([])

    useEffect(() => {

      }, [user]);

    const handleChanged =(e) =>{
        const {name , value} = e.target;
        setData({...data,[name]: value,});


    }


    const handleSumit =(e) =>{
        e.preventDefault();
        const obj = { ...data, uid: user.uid };

        console.log("oooo",obj);
        dispatch(addResumeAction(obj));


    }


  return (
    <>
        <Form onSubmit={handleSumit} className=' mt-5 w-75 p-3 shadow  justify-content-between align-items-center'>   
    
    <h2 className='text-center'>Add Resume</h2>

    <hr/>

   

    <div className='d-flex flex-row justify-content-around align-items-center'>

    <Form.Group className='mt-2 '>
    <Form.Label>First Name</Form.Label>
    <Form.Control type='text'  name='fname' onChange={handleChanged} placeholder='Enter F-Name'  />
    </Form.Group>

    <Form.Group className='mt-2 '>
    <Form.Label>Last Name</Form.Label>
    <Form.Control type='text'   name='lname' onChange={handleChanged} placeholder='Enter L-Name' />
    </Form.Group>

    <Form.Group className='mt-2 '>
    <Form.Label>Contact</Form.Label>
    <Form.Control type='number'  name='contact' onChange={handleChanged} placeholder='Enter Contact' />
    </Form.Group>

    </div>
    <div className='d-flex flex-row justify-content-around align-items-center'>

<Form.Group className='mt-2 '>
<Form.Label>Email Address</Form.Label>
<Form.Control type='text'   name='email' onChange={handleChanged} placeholder='Enter Email Address' />
</Form.Group>

<Form.Group className='mt-2 '>
<Form.Label>Country</Form.Label>
<Form.Control type='text' name='county' onChange={handleChanged} placeholder='Enter Country' />
</Form.Group>

<Form.Group className='mt-2 '>
<Form.Label>City</Form.Label>
<Form.Control type='text' name='city' onChange={handleChanged} placeholder='Enter City' />
</Form.Group>

     </div>

     <hr/>
     <h4>Professional Summary:</h4>
     <div>

        <Form.Control name='summary' onChange={handleChanged} as="textarea" rows={5}/>

     </div>

     <hr/>
     <h4>Employment History:</h4>
     <div>
     <Form.Group className='mt-2  d-flex justify-content-center align-items-center'>
    {/* <Form.Label>Add+ </Form.Label> */}
    <Form.Control type='text' name='history' onChange={handleChanged} placeholder='Enter History' />
    </Form.Group>
     </div>

     <hr/>
     <h4>Education :</h4>
     <div>
     <Form.Group className='mt-2  d-flex justify-content-center align-items-center'>
    {/* <Form.Label>Add+ </Form.Label> */}
    <Form.Control type='text' name='education' onChange={handleChanged} placeholder='Enter Education' />
    </Form.Group>
     </div>

     <hr/>
     {/* <h4>Skills :</h4>
     <div className='d-flex justify-content-center gap-2 align-items-center'>
     <Form.Control
            type="text"
            placeholder="Enter skill"
            name='skill'
            onChange={handleChanged}
          />
      
        <Button variant='dark' type='submit' onClick={OnhandleSkillAdd}>Add</Button>
    
     </div> */}

     <div className='d-grid m-auto'>
        <Button variant='dark mt-4 rounded-pill' type='submit'>Sumit</Button>

     </div>



     </Form>
    </>


  )
}
