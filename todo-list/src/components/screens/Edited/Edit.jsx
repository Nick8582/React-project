import React from "react";

const Edit = () => {
    const addTodo = ()=> {
        const editInput = document.getElementById('editInput');      
        const editTodo = document.getElementById(editInput.getAttribute("data-todo"))
        
        editTodo.innerHTML = editInput.value
        editInput.value = ''
    }

    return (
        <div className="text-white w-2/3 mx-auto">
            <h2 className="text-2xl font-bold text-center mb-5">Редактор задачи</h2>
            <textarea id="editInput" className="bg-transparent text-white w-full border-none outline-none resize-none p-5" onKeyPress={e => e.key === 'Enter' && addTodo()}></textarea>
        </div>
    )
}

export default Edit