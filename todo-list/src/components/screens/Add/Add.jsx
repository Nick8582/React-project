import React, { useState } from "react";
import TodoItem from "./item/TodoItem";
import CreateTodoField from "./create-todo-field/CreateTodoField";

const data =  [
    {
        _id: 'wefw23',
        title: 'Finish the essay collaboration',
        isCompleted: false,
    },
    {
        _id: 'wefw232454',
        title: 'Todos is visible',
        isCompleted: true,
    },
    {
        _id: 'wefw231231',
        title: 'React start',
        isCompleted: true,
    }
]

const Home = () => {
    const [todos, setTodos] = useState(data);

    const changeTodo = (id) => {
        const copy = [...todos]
        const current = copy.find(t => t._id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }
   
    const removeTodo = id => setTodos([...todos].filter(t => t._id !== id))

    const editTodo = (id) => {
        const editInput = document.getElementById('editInput')
        editInput.value = ''
        const copy = [...todos]
        const current = copy.find(t => t._id === id)
        
        editInput.setAttribute('data-todo', current._id)
        editInput.value += current.title
    }

    return (
        <div className='text-white w-1/3 mx-auto ' >
            <h1 className="text-2xl font-bold text-center mb-5">Список задач</h1>
            <CreateTodoField setTodos={setTodos} />
            {todos.map(todo => (
                <TodoItem  key={todo._id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo} editTodo={editTodo}/>
            ))}
            
        </div>
    )
}

export default Home