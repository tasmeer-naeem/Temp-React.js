import React from 'react'
import {v4 as uuid} from 'uuid' 
import {connect} from 'react-redux'
import { withRouter } from 'react-router';
import FormAddAction from '../Redux/Form/FormAction';


class Formclass extends React.Component {

    state={
       fullname  : "",
        email  : "" 
     }

    // HandleDescriptionInput=(e)=>{
    //     var value = e.target.value
    //     this.setState({
    //         description:value
    //     });
    // };
    // HandleAmountInput=(e)=>{
    //     var value = e.target.value
    //     this.setState({
    //         amount:value
    //     });
    // };
    // HandleTransactiontypeInput=(e)=>{
    //     var value = e.target.value
    //     this.setState({
    //         transactiontype:value
    //     });
    // };

    HandleFormInput=(e)=>{
      var {name,value}=e.target
      this.setState({
          [name]:value
      })
      console.log(name,value)
    };

    HandleFormSubmit=(e)=>{
        e.preventDefault();   
        //add
        var Obj={
            ...this.state,
            id : uuid()
        }
        console.log(Obj)
        this.props.FormAddAction(Obj)
    }     

    render=()=>{
        //console.log(this.props.defaultvalues)
        return (
            <div>
            <form onSubmit={this.HandleFormSubmit}>
                <input name="fullname" type="text" placeholder="fullname" onChange={this.HandleFormInput} value={this.state.fullname} />
                <input name="email" type="text" placeholder="email" onChange={this.HandleFormInput} value={this.state.email}/>
            </form>
            </div>
        )
    }
}
  
var actions={
    FormAddAction
}

export default connect(null,actions)(Formclass)
