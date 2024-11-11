import ACTION from "./toDosReducerActions.mjs";

export default function toDosReducer (toDos, action){
    switch (action.type) {
        case ACTION.ADDTODO:
            return [...toDos,
                {
                    id: toDos.length + 1,
                    item: action.payload,
                    complete: false
                }
            ]
        case ACTION.TOGGLECOMPLETE:
                return toDos.map(toDo =>
                    toDo.id === action.payload ? { ...toDo, complete: !toDo.complete } : toDo
                );    
        case ACTION.UPDATETODO:
            return toDos
        default:
           return toDos
    }
}

// function newToDo(formData){
//     return {formData: formData, complete: false}
// }

