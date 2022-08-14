import React from "react";
import Check from "./Check";
import cn from "classnames";
import {BsTrash} from 'react-icons/bs';
import {FiEdit2} from 'react-icons/fi';
import TextTruncate from 'react-text-truncate';

const TodoItem = ({todo, changeTodo, removeTodo, editTodo}) => {
    return (
        <div className="flex justify-between items-center mb-3 rounded-xl w-full bg-gray-800 p-4" >
            <button className="flex items-center outline-none" onClick={() => changeTodo(todo._id)}>
                <Check isCompleted={todo.isCompleted} />
                <span id={todo._id} className={cn({'line-through transition-all ease-in-out' : todo.isCompleted})}>
                <TextTruncate
                    line={1}
                    element="span"
                    truncateText="…"
                    text={todo.title}
                />
                    
                </span> 
            </button>
            <div>
                <button className="mr-4" onClick={() => editTodo(todo._id)}>
                    <FiEdit2 size={20} className='text-white hover:text-green-400 transition-colors ease-in-out duration-300' />
                </button>
                <button onClick={() => removeTodo(todo._id)}>
                    <BsTrash size={20} className='text-red-200 hover:text-red-700 transition-colors ease-in-out duration-300' />
                </button>
            </div>
        </div>
    )
}

export default TodoItem;