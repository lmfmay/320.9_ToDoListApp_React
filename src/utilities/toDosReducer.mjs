import ACTION from "./toDosReducerActions.mjs";

export default function toDosReducer (toDos, action){
    switch (action.type) {
        case ACTION.ADDTODO:
            return [
                {
                    id: action.payload.id,
                    item: action.payload.item,
                    complete: false,
                    isEditing: false
                },
                ...toDos //add new item at beginning of array
            ]
        case ACTION.TOGGLECOMPLETE:
                return toDos.map(toDo =>
                    toDo.id === action.payload ? { ...toDo, complete: !toDo.complete } : toDo
                );
        case ACTION.DELETETODO:
            return toDos.filter(toDo => toDo.id !== action.payload);

        case ACTION.EDITTODO:
            return toDos.map(toDo =>
                toDo.id === action.payload ? { ...toDo, isEditing: true } : toDo
            );
        case ACTION.SAVETODO:
            return toDos.map(toDo =>
                toDo.id === action.payload.id
                    ? { ...toDo, item: action.payload.newItem, isEditing: false }
                    : toDo
            );
        default:
           return toDos
    }
}

// function newToDo(formData){
//     return {formData: formData, complete: false}
// }

