export function addToDo(todo){
    return {
        type: 'TODO_ADDED',
        payload: todo
    }
}

export function markToDo(id){
    return {
        type: 'TODO_MARKED',
        payload: id
    }
}

export function removeToDo(id){
    return {
        type: 'TODO_REMOVED',
        payload: id
    }
}

export function incrementId(){
    return {
        type: 'COUNTER_INCREMENTED'
    }
}