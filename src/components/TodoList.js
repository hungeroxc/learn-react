import React, {Component} from 'react'
import Todo from './Todo'

const TodoList = ({todos, onTodoClick}) => (
    <ul>
        {
            todos.map((todo, index) => (
                <Todo
                    key={index}
                    onClick={() => onTodoClick(index)}
                    {...todo}
                />
            ))
        }
    </ul>
)

export default TodoList

