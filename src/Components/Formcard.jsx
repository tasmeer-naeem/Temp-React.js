// import React from 'react'
// import { connect } from 'react-redux'

// const Formcard = ({formdata : { fullname,email,id}}) => {
//     return (
//         <div>
//             <h1>Card</h1>
//             {fullname}-{email}-{id}
//             <button>Delete Item</button>
//             <button>Update Item</button>
//         </div>
//     )
// }

// var action={
        
// }

// export default connect(null,action)(Formcard)

import React from 'react'
import { connect } from 'react-redux'


const Formcard = ({formdata : {fullname , email ,id }}) => {
    return (
        <div>
        <h1>Card</h1>
            <h1>{fullname}-{email}<button >Delete</button> <button>Edit</button> </h1>
        </div>
    )
}

var actions=({
   
})

export default connect(null,actions)(Formcard)
