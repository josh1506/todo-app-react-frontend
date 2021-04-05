import route from './route'

// action type
const TODO_GET_DATA = 'todoGetData'
const TODO_ADDED = 'todoAdded'
const TODO_DELETED = 'todoDeleted'
const TODO_UPDATED = 'todoUpdated'


// action
export const todoGetData = () => async dispatch => {
    const respond = await route.get('todo/list/get_user_data/')
    .catch(() => console.log('Something went wrong'))
    dispatch({
        type: TODO_GET_DATA,
        payload: {todoList: respond.data}
    })
}

export const todoAdded = () => async dispatch => {
    return {
        type: TODO_ADDED,
        payload: {}
    }
}

export const todoDeleted = () => async dispatch => {
    return {
        type: TODO_DELETED,
        payload: {}
    }
}

export const todoUpdated = () => async dispatch => {
    return {
        type: TODO_UPDATED,
        payload: {}
    }
}


// reducer\
export default (todoList=[], action) => {
    switch (action.type) {
        case TODO_GET_DATA:
            return action.payload.todoList
            
        case TODO_ADDED:
            break
            
        case TODO_DELETED:
            break
            
        case TODO_UPDATED:
            break
            
    
        default:
            return todoList;
    }
}