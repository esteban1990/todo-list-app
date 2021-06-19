import React from 'react'

export const Todo = ({ todo, deleteTodo,toggleComplete, editTodo,setTodoEditing,setEditingText,editingText,todoEditing}) => {

    const handleCheckBox = () => {
        toggleComplete(todo.id)
    }

    const handleDeleteClick = () => {
        deleteTodo(todo.id)
    }
    const handleSubmitEditTodoClick = () => {
        editTodo(todo.id) 
    }
    const handleEditTodoClick = () => {
        setTodoEditing(todo.id)
    }
    const handleSetEditingText = (e) => {
        setEditingText(e.target.value)
    }
     return (
        <div>

            <input type='checkbox'onClick={handleCheckBox} />
            { todoEditing===todo.id ? (
                   <input type="text"
                   value={editingText}
                   onChange={handleSetEditingText}
                   />) 
                   :
                   (<div>{todo.task}</div>) }
          
         
            <button onClick={handleDeleteClick}>Delete Todo</button>
            {/* <button onClick={handleEditTodoClick1}>Edit Todo</button> */}

            {todoEditing === todo.id ? (<button onClick={handleSubmitEditTodoClick}>Submit Edit</button>) 
            :
            (<button onClick={handleEditTodoClick}>Edit Todo</button>)}
            
         
            
        </div>
    )
}
