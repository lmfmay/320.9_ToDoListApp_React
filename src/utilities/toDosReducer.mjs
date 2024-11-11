import ACTION from "./toDosReducerActions.mjs";

export default function toDosReducer (toDos, action){
    switch (action.type) {
        case ACTION.ADDTODO:
            return [...toDos,
                {
                    id: action.payload.id,
                    item: action.payload.item,
                    complete: false
                }
            ]
        case ACTION.TOGGLECOMPLETE:
                return toDos.map(toDo =>
                    toDo.id === action.payload ? { ...toDo, complete: !toDo.complete } : toDo
                );
        case ACTION.DELETETODO:
            return toDos.filter(toDo => toDo.id !== action.payload);

        case ACTION.UPDATETODO:
            return toDos
        default:
           return toDos
    }
}

// function newToDo(formData){
//     return {formData: formData, complete: false}
// }

