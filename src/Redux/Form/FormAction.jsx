import {ADD_DATA , DELETE_DATA ,UPDATE_DATA} from "./FormConstant";

const FormAddAction=(entry)=>({
    type: ADD_DATA,
    payload : entry
})

export const FormDelAction=(entryId)=>({
    type: DELETE_DATA,
    payload : entryId
})

export const FormUpdateAction=(entryId,updateData)=>({
    type: UPDATE_DATA,
    payload : {
        entryId,
        updateData
    }
})

export default FormAddAction;