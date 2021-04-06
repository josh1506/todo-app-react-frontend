import React, { useState } from 'react';
import { todoAdded } from '../../app/todo'
import { connect } from 'react-redux'

function TodoCreateModal(props) {
    const [checkListCount, setCheckListCount] = useState([])
    const [todo, setTodo] = useState({ memo: '', status: false })
    const [checklist, setChecklist] = useState({})

    const handleAddCheckList = () => {
        const count = checkListCount.length + 1
        setCheckListCount([...checkListCount, count])
        setChecklist({ ...checklist, [count]: { text: '', status: false } })
    }

    const handleSubmit = event => {
        const checklistData = []
        for (const [key, value] of Object.entries(checklist)) {
            checklistData.push(value)
        }

        props.todoAdded(todo, checklistData)
        props.onSetModal(false)
        setChecklist([])
    }

    return (
        <div className='create-todo-modal-container'>
            <div className="create-todo-modal">
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
                        {checkListCount.map(key => <input
                            className="todo-input-text-checklist"
                            key={key}
                            type="text"
                            name="checklist"
                            id="checklist"
                            placeholder="Checklist"
                            value={checklist[key].text}
                            onChange={e => setChecklist({ ...checklist, [key]: { text: e.target.value } })}
                        />)}
                    </div>
                    <p onClick={handleAddCheckList} className='todo-label-add'>+ Add checklist</p>
                </form>
                <div className='todo-btn-container'>
                    <button className='todo-btn-cancel' onClick={() => {
                        props.onSetModal(false)
                        setChecklist([])
                    }}>Cancel</button>
                    <button className='todo-btn-create' onClick={() => handleSubmit()}>Create</button>
                </div>
            </div>
        </div>
    );
}

export default connect(null, { todoAdded })(TodoCreateModal);