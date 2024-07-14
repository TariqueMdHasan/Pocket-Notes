import React, { useState } from 'react';
import './righttodo.css';
import Send from '../assets/send.png';

function RightTodo({ selectedTodo, todos, addSubTodo, deleteSubTodo }) {
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        if (inputValue.trim() === '') return;

        const currentDate = new Date();
        const formattedDate = `${currentDate.getDate()} ${currentDate.toLocaleString('default', { month: 'short' })} ${currentDate.getFullYear()}`;
        const hours = currentDate.getHours() % 12 || 12;
        const minutes = currentDate.getMinutes().toString().padStart(2, '0');
        const ampm = currentDate.getHours() >= 12 ? 'PM' : 'AM';
        const formattedTime = `${hours}:${minutes} ${ampm}`;

        const newTodo = {
            text: inputValue,
            date: formattedDate,
            time: formattedTime
        };

        addSubTodo(selectedTodo, newTodo);
        setInputValue('');
    };

    return (
        <div className='righttodo'>
            {selectedTodo && (
                <>
                    <div className='righttodo-title'>
                        <div className='right-header'>
                            <div
                                className="todo-color"
                                style={{ backgroundColor: selectedTodo.color }}
                            >
                                {selectedTodo.title.slice(0, 2).toUpperCase()}
                            </div>
                            <div className="todo-title-Right">{selectedTodo.title}</div>
                        </div>
                    </div>
                    <div className='righttodo-main'>
                        <div className='messages'>
                            {todos[selectedTodo.title] && todos[selectedTodo.title].map((todo, index) => (
                                <div key={index} className='texts'>
                                    <p>{todo.text}</p>
                                    <br />
                                    <span>{todo.date}  &#x2022;  {todo.time}</span>
                                    <button onClick={() => deleteSubTodo(selectedTodo, index)} className='Delete-btn'>Delete</button>
                                </div>
                            ))}
                            <h6>developed by Md Tarique Hasan</h6>
                        </div>
                        <div className='inputValues'>
                            <div className='inputCover'>
                                <textarea
                                    type="text"
                                    className='inputArea'
                                    placeholder='Enter your text here.........'
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                />
                                <button onClick={addTodo} className='send-btn'>
                                    <img src={Send} alt="send" />
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default RightTodo;

