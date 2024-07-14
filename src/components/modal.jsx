import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../components/modal.css';



const colors = ['#B38BFA', '#FF79F2', '#43E6FC', '#F19576', '#0047FF', '#6691FF'];

function Modal({ onClose, onAddTodo }) {
    const [title, setTitle] = useState('');
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const modalRef = useRef(null);

    const handleClickOutside = useCallback((event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            onAddTodo({
                title,
                color: selectedColor,
            });
            onClose();
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content" ref={modalRef}>
                <div className='modal-box'>
                    <div className='modal-box-CNG'>
                        <h1 className='CNG'>Create New Group</h1>
                    </div>
                    <div className='modal-box-GroupName'>
                        <h1>Group Name</h1>
                        <input
                            type="text"
                            placeholder='Enter group name'
                            className='input-title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className='modal-box-ChooseColor'>
                        <h1>Choose color</h1>
                        <div className='color-boxes'>
                            {colors.map((color) => (
                                <div
                                    key={color}
                                    className={`color-option box ${selectedColor === color ? 'selected' : ''}`}
                                    style={{ backgroundColor: color }}
                                    onClick={() => setSelectedColor(color)}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
                <button className='btn' type="submit" onClick={handleSubmit}>Create</button>
            </div>
        </div>
    );
}

export default Modal;
