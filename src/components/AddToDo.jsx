import { useState } from "react"
import ACTION from "../utilities/toDosReducerActions.mjs"
import toDosReducer from "../utilities/toDosReducer.mjs"
import DisplayToDo from "./DisplayToDo"

function AddToDo ({formData, setFormData, dispatch, toDos}){
    const [idCounter, setIdCounter] = useState(1) //track IDs to prevent id duplicates from deleting items
    function handleSubmit(e){
        e.preventDefault()
        dispatch({type: ACTION.ADDTODO, payload: {item: formData, id:idCounter}})
        setIdCounter (idCounter + 1);
        
        // dispatch({type: ACTION.ADDTODO, payload: e.target.value })
        setFormData('')
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" value = {formData} onChange={(e)=>setFormData(e.target.value)}/><br/>
            <button type="submit">Add to do</button>
        </form>
        </>
    )
}

export default AddToDo