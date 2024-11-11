import ACTION from "../utilities/toDosReducerActions.mjs"


function EditToDo ({toDoEdit,setToDoEdit, editText, setEditText, toDo, dispatch}){

    return (
        <>
        {toDoEdit === toDo.id ? (
            <input
                type="text"
                onChange={(e) => setEditText(e.target.value)}
                value={editText}
                placeholder={toDo.item}
            />
        ) : (toDo.item)}

        {toDoEdit === toDo.id ? (
            <button onClick={() => {
                dispatch({ type: ACTION.SAVETODO, payload: { id: toDo.id, newItem: editText } });
                setToDoEdit(null);
                setEditText('');
            }}>
                Save
            </button>
        ) : (
            <button onClick={() => {
                setToDoEdit(toDo.id);
                setEditText(toDo.item); // Set the current text for editing
            }}>
                Edit
            </button>
        )} 
        </>
    )
}

export default EditToDo