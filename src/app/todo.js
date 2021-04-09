import route from './route'

// action type
const TODO_GET_DATA = 'todoGetData'
const TODO_ADDED = 'todoAdded'
const TODO_DELETED = 'todoDeleted'
const TODO_UPDATED = 'todoUpdated'
const TASK_UPDATED = 'taskUpdated'
const TASK_DELETED = 'taskDeleted'
const TODO_UPDATED_DATA = 'todoUpdatedData'


// action
export const todoGetData = (token) => async dispatch => {
    const respond = await route.get('todo/list/get_user_data/',{headers: {'Authentication': `Token ${token}`}})
    .then(({data}) => dispatch({
        type: TODO_GET_DATA,
        payload: {todoList: data}
    }))
    .catch(() => console.log('Something went wrong'))
}

export const todoAdded = (todo, checklist) => async dispatch => {
    try {
        const request = await route.post('todo/list/', todo)
        await checklist.map(task => route.post(`todo/task/`, {...task, todo: request.data.id}))

        dispatch({
            type: TODO_ADDED,
            payload: {
                ...request.data,
                checklist
            }
        })
    } catch {
        console.log("Something went wrong")
    }
}

export const todoDeleted = todo => async dispatch => {
    await route.delete(`todo/list/${todo.id}/`)

    dispatch({
        type: TODO_DELETED,
        payload: todo 
    })
}

export const todoUpdated = (todo) => async dispatch => {
    todo.status = !todo.status
    await route.put(`todo/list/${todo.id}/`, todo)
    
    dispatch({
        type: TODO_UPDATED,
        payload: todo
    })
}

export const taskUpdated = (todoID, task) => async dispatch => {
    task.status = !task.status
    await route.put(`todo/task/${task.id}/`, task)

    dispatch({
        type: TASK_UPDATED,
        payload: {
            todoID,
            checklist: task
        }
    })
}

export const taskDeleted = (todo, task) => async dispatch => {
    await route.delete(`todo/task/${task.id}/`)

    dispatch({
        type: TASK_DELETED,
        payload: {
            ...todo,
            checklist: task
        }
    })
}

export const todoUpdateData = (todo, task) => async dispatch => {
    console.log(task)
    await route.put(`/todo/list/${todo.id}/`, todo)
    if(task.length > 0) await task.map(checklist => checklist.id 
        ? route.put(`todo/task/${checklist.id}/`, checklist) 
        : route.post(`todo/task/`, {...checklist, todo: todo.id}))
    
    dispatch({
        type: TODO_UPDATED_DATA,
        payload: {
            ...todo,
            checklist: task
        }
    })
}


// reducer\
const todo = (todoList=[], action) => {
    switch (action.type) {
        case TODO_GET_DATA:
            return action.payload.todoList
            
        case TODO_ADDED:
            console.log(action.payload)
            return [...todoList, action.payload]
            
        case TODO_DELETED:
            return todoList.filter(todo => todo.id !== action.payload.id)
            
        case TODO_UPDATED:
            return todoList.map(todo => todo.id === action.payload.id ? action.payload : todo)
            
        case TODO_UPDATED_DATA:
            return todoList.map(todo => todo.id === action.payload.id ? action.payload : todo)
            
        case TASK_UPDATED:
            const todoID = action.payload.todoID
            const checklist = action.payload.checklist

            return [...todoList.map(todo => 
                todo.id === todoID ? 
                    {...todo, 
                        checklist: [...todo.checklist.map(task => 
                            task.id === checklist.id 
                            ? checklist 
                            : task)]} 
                    : todo)]

        case TASK_DELETED:
            return todoList.map(todo => todo.id === action.payload.id 
                ? {...todo, checklist:todo.checklist.filter(task => task.id !== action.payload.checklist.id)} 
                : todo)
            
        default:
            return todoList;
    }
}

export default todo