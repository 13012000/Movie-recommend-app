import React, { useState } from 'react';
import '../src/components/contact.css';
import Footer from './Footer';

const isValidEmail =(email) =>{
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
}

const isValidcontact=(contactno) =>{
    return /^[6-9]\d{9}$/.test(contactno);
}

const Mocontact = () =>{
 
  const [data, setData] = useState({
    name:'',
    email:'',
    contact:'',
    message:'',
    nameError:false,
    emailError:false,
    emailError2:false,
    messageError:false,
    contactError:false,
  });

  const [valid,setValid] = useState(false);

  // const submit = (e) =>{
  //   setValid(false)
  //   e.preventDefault();
  // }
  const display = (e) =>{
    const {name,value} = e.target;
    setData((prev) =>{
        return{
            ...prev,
            [name] : value,
        }
    })
  }

  const handleBlur = (e) => {
    const {name, value} = e.target;
   
    if(value.length <= 0 && name === 'name'){
      setData((prev)=>{ return{ ...prev, nameError:true,}})
    }
   else{setData({nameError:false});}
  }
   const handleBlur1 = (e) => {
    const {name, value} = e.target;
    if(value.length <= 0 && name === 'email'){
      setData((prev)=>{ return{ ...prev, emailError:true,}})
      setData((prev)=>{ return{ ...prev, emailError2:false,}})
    }
   
      else{
        setData({emailError:false});
        if(isValidEmail(value)){
          setData((prev)=>{ return{ ...prev, emailError2:false,}})
      }
        else{
          setData({emailError2:true})
      }   
  }
}

const handleBlur3 = (e) =>{
    const {name,value} = e.target;

    if(isValidcontact(value) && name === 'contact'){
        setData((prev)=>{return{...prev, contactError:false,}})
    }
    else{
        setData({contactError:true})
    }
  }
   const handleBlur2 = (e) => {
    const {name, value} = e.target;
   
    if(value.length <= 0 && name === 'message'){
      setData((prev)=>{ return{ ...prev, messageError:true,}})
    }
   else{setData({messageError:false});}
  }
 

  const submit = async (event) =>{
    const {name, email, contact, message} = data;
    event.preventDefault();
    setValid(true);
    if(name && email && contact && message){
    const res = fetch("https://movie-contact-data-default-rtdb.firebaseio.com/Users.json",
    {
      method : "POST",
      headers : {"content-type" : "application/json"},
      body : JSON.stringify({
        name, email, contact, message,
      })
    }
    )
    if(res){
    alert("data stored")}
    else{
      alert("Please fill the data");
    }}
  }

if(!valid){
return (
<>
<div className = "wrapper">
<div className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-light">
  <div className="card-header bg-transparent border-0 text-center text-uppercase"><h3>Contact Form</h3></div>
  <div className="card-body">
    <form action="/" onSubmit={submit}  encType="multipart/form-data" autoComplete="off">
      <div className="form-group">
        <label className="mb-0">Your name<span className="text-danger">*</span></label>
        <input name="name" type="text" className="form-control" placeholder="Name" required  onChange = {display} onBlur={handleBlur}/>
        {data.nameError
            ? <div className="alert alert-danger mt-2">Name is a required field.</div>
            : ''
          }
        
      </div>
      <div className="form-group">
        <label className="mb-0">Your email<span className="text-danger">*</span></label>
        <input name="email" type="email" className="form-control" placeholder="Email" onChange = {display} onBlur={handleBlur1}/>
        {data.emailError ?
        <div className="alert alert-danger mt-2">Email is required field</div>
        : '' }

        {data.emailError2 ?
                <div className="alert alert-danger mt-2">Email is Invalid</div>
                : '' }
       
      </div>
      <div className="form-group">
        <label className="mb-0">Your contact number</label>
        <input name="contact" type="text" className="form-control" placeholder="Contact" onChange = {display} onBlur={handleBlur3}/>
        {data.contactError ?
                <div className="alert alert-danger mt-2">Contact is Invalid</div>
                : '' }
      </div>
      <div className="form-group">
        <label className="mb-0">Message<span className="text-danger">*</span></label>
        <textarea name="message" type="text" className="form-control" placeholder="Message" onChange = {display} onBlur={handleBlur2}/>
        {data.messageError ?
        <div className="alert alert-danger mt-2">Message is required field</div>
        : '' }
        
      </div>
        <p className="text-center mb-0"><input type="submit" className="btn btn-primary btn-lg w-100 text-uppercase" value="Submit Now" /></p>
    </form>
  </div>
</div>
</div>
<Footer/>
</>
)}else{
  return(
    <div className="thankyou_details">
              <div className="alert alert-success mt-3">Mail sent successfully.</div>
            </div>
  )
}
}
   
export default Mocontact;
