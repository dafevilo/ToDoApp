import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import {
    getTodos, 
    getTodosLoading,
    getIncompleteTodos,
    getCompleteTodos,
} from './selectors' 
import {loadTodos, removeTodoRequest, updateTodoRequest} from './thunks'
import './TodoList.css'

const TodoList = ({ completedTodos, incompleteTodos, onRemovePressed, onCompleted, isLoading, startLoadingTodos }) => {

    useEffect(() => {
        startLoadingTodos();
    },[]);

    const loadingMessage = <div>Loading todos...</div>
    const content = (
        <div className='list-wrapper'>
            <NewTodoForm />
            <h3>Incomplete:</h3>
            {incompleteTodos.map(todo => <TodoListItem 
                todo={todo} 
                onRemovePressed={onRemovePressed} 
                onCompleted={onCompleted} />)}
            <h3>Completed:</h3>
            {completedTodos.map(todo => <TodoListItem 
                todo={todo} 
                onRemovePressed={onRemovePressed} 
                onCompleted={onCompleted} />)}    
        </div>
    )
    return isLoading ? loadingMessage : content;
}


const mapStateToProps = state => ({ 
    isLoading: getTodosLoading(state),
    completedTodos: getCompleteTodos(state),
    incompleteTodos: getIncompleteTodos(state)
})

const mapDispatchToProps = dispatch => ({
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompleted: id => dispatch(updateTodoRequest(id)),
    startLoadingTodos: () => dispatch(loadTodos())
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
