import React from "react";
import Check from "./Check";
import cn from "classnames";
import {BsTrash} from 'react-icons/bs';
import {FiEdit2} from 'react-icons/fi'

const TodoItem = ({todo, changeTodo, removeTodo}) => {
    return (
        <div className="flex justify-between items-center mb-3 rounded-xl w-full bg-gray-800 p-4" >
            <button className="flex items-center" onClick={() => changeTodo(todo._id)}>
                <Check isCompleted={todo.isCompleted} />
                <span className={cn({'line-through' : todo.isCompleted})}>
                    {todo.title}
                </span> 
            </button>
            <div>
                <button className="mr-4">
                    <FiEdit2 size={20} className='text-white hover:text-green-400' />
                </button>
                <button onClick={() => removeTodo(todo._id)}>
                    <BsTrash size={20} className='text-red-200 hover:text-red-700 transition-colors ease-in-out duration-30' />
                </button>
            </div>
        </div>
    )
}

export default TodoItem;