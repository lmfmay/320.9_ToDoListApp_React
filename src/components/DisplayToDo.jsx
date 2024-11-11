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
            </li>
            )
        })}
        
        </>
        
    )
}

export default DisplayToDo