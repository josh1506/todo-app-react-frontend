import React from 'react';
import { connect } from 'react-redux'

import { todoDeleted } from '../../app/todo'

function TodoDeleteModal(props) {
    const todoMemoTrimMsg = props.onSelectTodo.memo.substring(0, 25)
    const todoMemoCheckLength = props.onSelectTodo.memo.trim().length > 25 ? '...' : ''
    const todoMessage = `${todoMemoTrimMsg}${todoMemoCheckLength}`

    const handleDeleteTodo = () => {
        props.todoDeleted(props.onSelectTodo)
        props.onSetModal(false)
        props.onCloseEditModal(false)
    }

    return (
        <div className='delete-todo-modal-container'>
            <div className="delete-todo-modal">
                <p className='delete-message'>Are you sure you want to delete <h4>{todoMessage}</h4></p>
                <div className='todo-btn-container'>
                    <button className='todo-btn-cancel-delete' onClick={() => props.onSetModal(false)}>Cancel</button>
                    <button className='todo-btn-delete' onClick={handleDeleteTodo}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default connect(null, { todoDeleted })(TodoDeleteModal);