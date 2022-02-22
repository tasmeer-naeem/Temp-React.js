import React from 'react'
import { useState } from 'react'
import {v4 as uuid} from 'uuid'
import {connect} from 'react-redux'
//import { withRouter } from 'react-router';
import FormAddAction from '../Redux/Form/FormAction';

const Formcrud = (props) => {

    const [inputfield, setinputfield] = useState({
        fullname:"",
        email:""
    })
    const [array, setarray] = useState([])

const handleInput=(e)=>{
    var {name,value}=e.target
    setinputfield({...inputfield,[name]:value})
    //console.log(name,value)

}


const handleFormSubmit=(e)=>{
    e.preventDefault()
   //console.log( inputfield.fullname,inputfield.email)
    const item={...inputfield,id:uuid()}
    setarray([...array,item])
    console.log(item)
    props.FormAddAction(item)
   
}
    return (
        <div>
            <form onSubmit={handleFormSubmit} >
            <input type="text" placeholder="name" name="fullname" value={inputfield.fullname} onChange={handleInput}/>
            <input type="text" placeholder="email" name="email" value={inputfield.email} onChange={handleInput}/>
            <button>Submit</button>
            </form>
         </div>
    )
}

var action={
    FormAddAction
}

export default connect(null,action)(Formcrud)
