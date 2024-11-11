import ACTION from "../utilities/toDosReducerActions.mjs"

function DisplayToDo({toDos, dispatch}){
    // const [complete, setComplete] = useState(toDos.map((toDo)=>{
    //     !toDo.complete
    // }));

    return(
        <>
        {toDos.map((toDo)=>{
            return(
            <li key = {toDo.id}>
                <input key = {toDo.id} type="checkbox" name="" id="" onClick={()=>dispatch({type: ACTION.TOGGLECOMPLETE, payload:toDo.id})}/> 
                {toDo.item}
                <button>Edit</button>
                <button disabled = {!toDo.complete} onClick={()=>dispatch({type: ACTION.DELETETODO, payload:toDo.id})}>Delete</button>
            </li>
            )
        })}
        
        </>
        
    )
}

export default DisplayToDo