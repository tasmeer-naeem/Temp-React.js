import {ADD_DATA, DELETE_DATA, UPDATE_DATA} from './FormConstant'

var initialState=[]

const FormReducer=(state=initialState,action)=>{
    var {type,payload}=action
    switch (type) {
        case ADD_DATA:
              return [...state,payload.entry]
        case DELETE_DATA:
            return state.filter((delitem)=> delitem.Id !== payload.entryId)
        case UPDATE_DATA:
            return state.map((edititem)=>{
                if(edititem.id === payload.entryId){
                    return{
                    ...edititem,
                    ...payload.updateData
                }
                }
                else{
                    return {...edititem}
                }
            })
        default:
            return state
    }

}

export default FormReducer;