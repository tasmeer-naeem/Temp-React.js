import React from 'react'
import { connect } from 'react-redux'
import Formcard from './Formcard'
import Formclass from './Formclass'

const Formlist = ({items}) => {
    console.log(items);
    return (
        <div>
            
            {
                items.map((record)=>{
                    return(          
                        <Formcard 
                        key={record.id} 
                        formdata={record}/>
                    )
                })
            }
        </div>
    )
}

var mapState=(state)=>({
    items : state.items
})

export default connect(mapState)(Formlist)

// {items.map((formdata)=>
//     <Formcard key={formdata.id}
//      formdata={formdata}/> )}