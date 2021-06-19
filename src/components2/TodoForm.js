import React,{useState} from 'react'

export const TodoForm = ({setTodos}) => {

    const [input, setInput] = useState({
        id: new Date().getTime(),
        task:'',
        done:false,
        editTodo: false
    })

    const handleChange = (e) => {
        setInput( {...input, task: e.target.value} )
    }

    const handleSubmit = (e) => {
        e.preventDefault();

         const newTodo = {
             id: new Date().getTime(),
             task: input.task,
             done:false,
             editTodo:false
         }
        //  setInput('')
         setTodos(todos => [...todos,newTodo])
         setInput({
             ...input,
             task:''
         })
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                tpye='text'
                value={input.task}
                onChange={handleChange}

                />

                <button tpye='submit' className='btn btn-primary'>Agrega Todo</button>
            </form>
        </div>
    )
}
