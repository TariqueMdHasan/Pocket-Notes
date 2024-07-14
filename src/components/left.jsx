import React, { useState } from 'react';
import '../components/left.css';
import Modal from '../components/modal';


function Left({ todos, onAddTodo, onTodoClick }){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTodoIndex, setSelectedTodoIndex] = useState(null);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleTodoClick = (index) => {
        onTodoClick(index);
        setSelectedTodoIndex(index);
        
    };

    return(
        <div className='left'>
            <div className='left-header'>
                <h1>Pocket Notes</h1>
            </div>
            <div className='left-titles'>
                <button onClick={handleOpenModal} className='add'>+</button>
                {isModalOpen && (
                    <Modal onClose={handleCloseModal} onAddTodo={onAddTodo} />
                )}
                <div className="todo-list">
                    {todos.map((todo, index) => (
                        <div 
                            key={index}
                            className={`todo-item ${selectedTodoIndex === index ? 'selected' : ''}`}
                            onClick={() => handleTodoClick(index)}>
                            <div
                                className="todo-color"
                                style={{ backgroundColor: todo.color }}
                            >
                                {todo.title.slice(0, 2).toUpperCase()}
                            </div>
                            <div className="todo-title">{todo.title}</div>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default Left;