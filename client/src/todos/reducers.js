import {CREATE_TODO, 
    REMOVE_TODO, 
    MARK_TODO_AS_COMPLETED,
    LOAD_TODOS_IN_PROGRESS,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_FAILURE
} from './actions'

const initialState = {isLoading: false, data: [] }

export const todos = (state=initialState, action) => {
    const {type, payload} = action;

    switch(type){
        case CREATE_TODO: {
            return {
                ...state,
                data: state.data.concat(payload)
            };
        }
        case REMOVE_TODO:{
            return {
                ...state,
                data: state.data.filter(todo => todo.id !== payload.id)
            }
        }
        case MARK_TODO_AS_COMPLETED: {
            return {
                ...state,
                data: state.data.map(todo => {
                    if(todo.id === payload.id){
                        return payload;
                    }
                    return todo;
                })
            }
        }
        case LOAD_TODOS_SUCCESS:{
            return {
                ...state,
                isLoading: false,
                data: payload,
            }
        }
        case LOAD_TODOS_IN_PROGRESS: {
            return { 
                ...state,
                isLoading: true
            }
        }
        case LOAD_TODOS_FAILURE: {
            return {
                ...state,
                isLoading: false,
            }
        }
        default: 
            return state
    }
    
}