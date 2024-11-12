import ACTION from "../utilities/toDosReducerActions.mjs"
import { useState } from "react"
import EditToDo from "./EditToDo";


function DisplayToDo({ toDos, dispatch }) {
    const [toDoEdit, setToDoEdit] = useState(null); // ID of todo being edited
    const [editText, setEditText] = useState(''); // Text for editing todo

    return (
        <>
            {toDos.map((toDo) => {
                return (
                    <li key={toDo.id}>
                        <input
                            className="listCheckBox"
                            type="checkbox"
                            checked={toDo.complete}
                            onChange={() => dispatch({ type: ACTION.TOGGLECOMPLETE, payload: toDo.id })}
                            hidden={editText} //hide when editing
                        /> 
                        <EditToDo toDoEdit ={toDoEdit} setToDoEdit ={setToDoEdit} editText ={editText} setEditText= {setEditText} toDo={toDo} dispatch={dispatch}/>
                        <button
                            className="listBtn"
                            id="listBtnDel"
                            disabled={!toDo.complete} //disabled if list item is not complete
                            onClick={() => dispatch({ type: ACTION.DELETETODO, payload: toDo.id })}
                            hidden={editText}>
                            Delete
                    </button>
                    </li>
                );
            })}
        </>
    );
}


export default DisplayToDo