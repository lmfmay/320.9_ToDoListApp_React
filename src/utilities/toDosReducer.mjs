import ACTION from "./toDosReducerActions.mjs";

export default function toDosReducer (toDos, action){
    switch (action.type) {
        case ACTION.ADDTODO:
            return [...toDos, newToDo(action.payload.formData)]
        case ACTION.UPDATETODO:
            return state
        default:
           return state
    }
}

function newToDo(formData){
    return {formData: formData, complete: false}
}

