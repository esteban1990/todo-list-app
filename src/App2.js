import React, { useState, useEffect } from 'react'
import { TodoForm } from './components2/TodoForm'
import TodoList from './components2/TodoList'

const App2 = () => {

    const [todos, setTodos] = useState([])
    const [todoEditing,setTodoEditing] = useState(null)
    const [editingText,setEditingText] = useState('')

    useEffect(() => {
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)

        if(loadedTodos){
            setTodos(loadedTodos)
        }
    }, [])
    
    useEffect(() => {
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos",temp)
    },[todos])
    

    const deleteTodo = (id) => {
        const updatedTodos = [...todos].filter((todo) => {
            return (
                todo.id !== id
            )
        })
        setTodos(updatedTodos)
    }

    const toggleComplete = (id) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        done: !todo.done
                    };
                }
                return todo
            })
        )
    }


    const editTodo = (id) => {
        const updateTodos = [...todos].map(todo => {
            if (todo.id === id) {
                todo.task = editingText
            }
            return todo
        })
        setTodos(updateTodos)
        setTodoEditing(null);
        setEditingText('')

    }





    return (
        <>
            <TodoForm setTodos={setTodos} />
            <TodoList editTodo={editTodo} todoEditing={todoEditing} editingText={editingText} setEditingText={setEditingText} setTodoEditing={setTodoEditing} todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
        </>
    )
}
export default App2