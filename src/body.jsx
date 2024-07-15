import React, { useState, useEffect } from 'react';
import '../src/body.css';
import Left from '../src/components/left';
import RightTodo from '../src/components/righttodo';
import Right from '../src/components/right';



function Body() {
    const [todos, setTodos] = useState([]);
    const [selectedTodoIndex, setSelectedTodoIndex] = useState(null);
    const [subTodos, setSubTodos] = useState({});

    
    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos'));
        if (savedTodos) {
            setTodos(savedTodos);
        }

        const savedSubTodos = JSON.parse(localStorage.getItem('subTodos'));
        if (savedSubTodos) {
            setSubTodos(savedSubTodos);
        }
    }, []);

    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    
    useEffect(() => {
        localStorage.setItem('subTodos', JSON.stringify(subTodos));
    }, [subTodos]);

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    const addSubTodo = (parentTodo, newSubTodo) => {
        setSubTodos(prevState => ({
            ...prevState,
            [parentTodo.title]: prevState[parentTodo.title] ? [...prevState[parentTodo.title], newSubTodo] : [newSubTodo]
        }));
    };

    const deleteSubTodo = (parentTodo, index) => {
        setSubTodos(prevState => ({
            ...prevState,
            [parentTodo.title]: prevState[parentTodo.title].filter((_, i) => i !== index)
        }));
    };

    const handleTodoClick = (index) => {
        setSelectedTodoIndex(index);
    };

    return (
        <div className='body'>
            <Left todos={todos} onAddTodo={addTodo} onTodoClick={handleTodoClick} selectedTodoIndex={selectedTodoIndex} />
            {selectedTodoIndex !== null 
                ? <RightTodo selectedTodo={todos[selectedTodoIndex]} todos={subTodos} addSubTodo={addSubTodo} deleteSubTodo={deleteSubTodo} /> 
                : <Right />}
        </div>
    );
}

export default Body;
