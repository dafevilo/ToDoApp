import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import styled from 'styled-components'
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import {
    getTodosLoading,
    getIncompleteTodos,
    getCompleteTodos,
} from './selectors' 
import {loadTodos, removeTodoRequest, updateTodoRequest} from './thunks'

const ListWrapper = styled.div`
    width: 60%;
    margin: auto;
`;

const TodoList = ({ completedTodos, incompleteTodos, onRemovePressed, onCompleted, isLoading, startLoadingTodos }) => {

    useEffect(() => {
        startLoadingTodos();
    },[]);

    const loadingMessage = <div>Loading todos...</div>
    const content = (
        <ListWrapper>
            <NewTodoForm />
            {incompleteTodos 
                ? <h3>Incomplete:</h3>
                : ''}
            {incompleteTodos.map(todo => <TodoListItem 
                todo={todo} 
                onRemovePressed={onRemovePressed} 
                onCompleted={onCompleted} />)}
            {completedTodos
                ? <h3>Completed:</h3>
                : ''}
            {completedTodos.map(todo => <TodoListItem 
                todo={todo} 
                onRemovePressed={onRemovePressed} 
                onCompleted={onCompleted} />)}    
        </ListWrapper>
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
