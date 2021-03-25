import React from 'react';
import TodoListItem from '.TodoListItem';
import './TodoList.css'

const TodoList = () => {
    return (
        <div className='listwrapper'>
            {todos.map(todo => <TodoListItem todo={todo} />)}
        </div>
    )
}

export default TodoList
