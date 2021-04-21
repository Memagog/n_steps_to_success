const ADD_TODO_ITEM = "ADD_TODO_ITEM";
const UPDATE_TODO = "UPDATE_TODO";
const DELETE_TODO = "DELETE_TODO";
const COMPLETED_TODO = "COMPLETED_TODO";

export function addTodo(text){
    return {
        type: ADD_TODO_ITEM,
        text
    }
}
export function deleteTodo(id){
    return{
        type: DELETE_TODO,
        id
    }
}
export function updateTodo(text){
    return {
        type: UPDATE_TODO,
        text
    }
}
export function completedTodo(id){
    return{
        type: COMPLETED_TODO,
        id
    }
}
