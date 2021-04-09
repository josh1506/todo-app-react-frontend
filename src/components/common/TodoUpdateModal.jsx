import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'

import { todoUpdateData, taskDeleted } from '../../app/todo'
import TodoDeleteModal from './TodoDeleteModal';

function TodoUpdateModal(props) {
    const [checklistData, setChecklistData] = useState([{ id: 1, 1: { text: '', status: false } }])
    const [todo, setTodo] = useState({ memo: '', status: false, checklist: [{ text: '', status: false }] })
    const [checklist, setChecklist] = useState({ 1: { text: '', status: false } })
    const [deleteModal, setDeleteModal] = useState(false)

    useEffect(() => {
        if (props.itemSelect.checklist) setChecklistData(props.itemSelect.checklist)

        setTodo(props.itemSelect)
        // setChecklistData()


    }, [props.itemSelect])

    const handleAddCheckList = () => {
        const count = checklistData.length + 1
        setChecklistData([...checklistData, count])
        setChecklist({ ...checklist, [count]: { text: '', status: false } })
    }

    const handleChangeChecklist = index => e => {
        const newChecklist = [...checklistData]
        newChecklist[index] = { ...newChecklist[index], text: e.target.value }
        setChecklistData(newChecklist)
    }

    const handleDeleteChecklist = task => {
        props.taskDeleted(todo, task)
        setChecklistData(checklistData.filter(taskItem => taskItem.id !== task.id))
    }

    const handleSubmit = () => {
        props.todoUpdateData(todo, checklistData)
        props.onSetModal(false)
    }

    return (
        <div className='create-todo-modal-container'>
            <div className="create-todo-modal">
                <FontAwesomeIcon icon={faTrashAlt} color='white' size='lg' className='todo-delete-icon' onClick={() => setDeleteModal(true)} />
                <form className='todo-form-container' onSubmit={handleSubmit}>
                    <label htmlFor="memo" className="todo-label">Memo</label>
                    <input
                        type="text"
                        name="memo"
                        id="memo"
                        className="todo-input-text-memo"
                        placeholder="Memo"
                        value={todo.memo}
                        onChange={e => setTodo({ ...todo, memo: e.target.value })}
                    />
                    <label htmlFor="checklist" className="todo-label">Memo</label>
                    <div className='checklist-count-container'>
                        {checklistData.map((task, index) =>
                            <div style={{ display: 'flex' }}>
                                <input
                                    className="todo-input-text-checklist"
                                    key={`${task.id}`}
                                    type="text"
                                    name={`checklist${task.id}`}
                                    id={`checklist${task.id}`}
                                    placeholder="Checklist"
                                    value={task.text}
                                    onChange={handleChangeChecklist(index)}
                                />
                                <FontAwesomeIcon
                                    className='todo-delete-icon'
                                    color='white'
                                    icon={faMinus}
                                    style={{ marginLeft: 10 }}
                                    onClick={() => handleDeleteChecklist(task)}
                                />
                            </div>
                        )}
                    </div>
                    <p onClick={handleAddCheckList} className='todo-label-add'>
                        <FontAwesomeIcon
                            color='white'
                            size='xs'
                            icon={faPlus}
                            style={{ marginLeft: 10 }}
                        /> Add checklist</p>
                </form>
                <div className='todo-btn-container'>
                    <button className='todo-btn-cancel' onClick={() => props.onSetModal(false)}>Cancel</button>
                    <button className='todo-btn-create' onClick={() => handleSubmit()}>Save</button>
                </div>
            </div>

            {deleteModal && <TodoDeleteModal onSelectTodo={todo} onSetModal={setDeleteModal} onCloseEditModal={props.onSetModal} />}
        </div>
    );
}

export default connect(null, { todoUpdateData, taskDeleted })(TodoUpdateModal);