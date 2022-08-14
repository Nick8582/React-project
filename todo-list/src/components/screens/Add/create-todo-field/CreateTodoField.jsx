import React, { useState } from "react";

const CreateTodoField = ({ setTodos }) => {
    const [title, setTitle] = useState('')

    const addTodo = (title) => {
        setTodos(prev => [
            {
                _id: new Date(),
                title,
                isCompleted: false
            },
            ...prev, 
        ])
        setTitle('')
    }

    return (
        <div className="flex items-center justify-between mb-5 rounded-2xl border-zinc-800 border-2 p-5 w-full">
            <input type="text" onChange={e => setTitle(e.target.value)} value={title} onKeyPress={e => e.key === 'Enter' && addTodo(title)} placeholder='Добавить задачу'  className="bg-transparent w-full border-none outline-none"/>
        </div>
    )
}

export default CreateTodoField