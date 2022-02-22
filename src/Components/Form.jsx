import React from 'react'
import { useState } from 'react'
//import {v4 as uuid} from 'uuid'
//import Button from '@mui/material/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { Input } from '@material-ui/core';


var useStyles = makeStyles({                //internal css
    root: {
       width:"300px",
       Height:"",
      
       padding:"40px",
       backgroundColor:"grey", 
       fontSize:"20px" ,
      margin:"auto"
       
     },
     roott:{
        width:"600px",
        backgroundColor:"grey", 
        
     }
});

const Form = () => {

    const classes=useStyles();

    const [login,setlogin]= useState({
        Name : "",
        Email : "",
        Password : "",
        Contact : "",
        Address : ""
    });
    const [array, setarray] = useState([])

    const handleInput=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        //console.log(name,value)
        setlogin({...login,[name]:value});
    }

    //const submitForm=(e)=>{
        // e.preventDefault()
        // const items={...login ,id : uuid() }
        // setarray([...array,items])
        // //console.log(items)
        // //console.log(array)
        // setlogin({Name:"",Email:"",Password:"",Contact:"",Address:""})
   // }

   const PostData=async(e)=>{
    e.preventDefault()
    const {  Name , Email ,  Password,  Contact , Address } = login;

    if(Name && Email &&  Password &&  Contact && Address){

        const res=await fetch("https://loginform-df02b-default-rtdb.firebaseio.com/LoginFormDB.json",
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
            Name ,
            Email ,
            Password, 
            Contact ,
            Address ,
            })
        });
        if(res){
            setlogin({
                Name : "",
                Email : "",
                Password : "",
                Contact : "",
                Address : ""
            });
            alert("Data stored successfully on firebase")
        }
    }
    else{
        alert("Please fill the required fields")
    }

   }

    return (
        <div  >
        <h1 style={{  fontFamily: 'Josefin Slab' , textAlign:"center"}}>Login</h1>
        <Card className={classes.root}  >      
        <form action=""  >
          <label>Name</label><br/>
          <Input type="text" name="Name" value={login.Name}  onChange={handleInput} required /><br/>
          <label>Email</label><br/>
          <Input type="text" name="Email" value={login.Email} onChange={handleInput} required/><br/>
          <label>Password</label><br/>
          <Input type="Password" name="Password" value={login.Password} onChange={handleInput} required /><br/>
          <label>Contact</label><br/>
          <Input type="text" name="Contact" value={login.Contact} onChange={handleInput} required/><br/>
          <label>Address</label><br/>
          <Input type="text" name="Address" value={login.Address} onChange={handleInput} required/><br/>
          <Button type="submit"  style={{backgroundColor:"darkgray" ,marginTop:"15px"}} onClick={PostData}  ><AccountCircleIcon/>Login</Button>
          </form>
          </Card>
          <br/><br/>
          <div  >
          <Card className={classes.roott}>  
          {
              array.map((record)=>{
                const {id, Name , Email , Password , Contact , Address} = record
                  return(          
                      <div key={id} style={{padding:"4px"}} >
                        {Name}  {Email}  {Password}  {Contact}  {Address}
                      </div>
                  )
              })
          }
          </Card>
          </div>
        
        </div>
    )
};

export default Form
