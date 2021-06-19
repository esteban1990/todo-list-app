import React from 'react'
import { Todo } from './Todo'

export const TodoList = ({todos,deleteTodo,toggleComplete,editTodo,setTodoEditing,setEditingText,editingText,todoEditing}) => {
    return (
        <div>
            {
                todos.map(todo => {
                    return(
                        <Todo
                        key={todo.id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                        toggleComplete={toggleComplete}
                        editTodo={editTodo}
                        setTodoEditing={setTodoEditing}
                        setEditingText={setEditingText}
                        editingText={editingText}
                        todoEditing={todoEditing}
                        
                      

                        />
                    )
                })
            }
        </div>
    )
}
export default TodoList
