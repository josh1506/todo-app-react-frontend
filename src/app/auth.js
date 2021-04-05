import route from './route';


// action type
const AUTH_ADDED = 'authAdded'
const AUTH_REMOVED = 'authRemoved'


// actions
export const authAdd = token => {
    return {
        type: AUTH_ADDED,
        payload: {
            token
        }
    }
}

export const authRemoved = () => {
    return {
        type: AUTH_REMOVED,
    }
}


// reducer
export default (auth='', action) => {
    switch (action.type) {
        case AUTH_ADDED:
            return action.payload.token
            
        case AUTH_REMOVED:
            return ''
    
        default:
            return auth;
    }
} 


