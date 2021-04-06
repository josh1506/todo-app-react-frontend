import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faEdit } from '@fortawesome/free-solid-svg-icons'

import todo, { todoGetData, todoUpdated, taskUpdated } from '../../app/todo'
import TodoCreateModal from '../common/TodoCreateModal';
import '../assets/css/todo.css'
import TodoUpdateModal from './../common/TodoUpdateModal';

function ToDo(props) {
    const [selectedItem, setSelectedItem] = useState('')
    const [todoSelected, setTodoSelected] = useState({})
    const [createModal, setCreateModal] = useState(false)
    const [updateModal, setUpdateModal] = useState(false)

    useEffect(() => {
        const token = props.auth || localStorage.getItem('auth_token')
        if (!token) props.history.replace('/login')

        props.todoGetData()
    }, [])

    const calcTotalTask = (todo) => {
        if (todo.status) return 'Done'
        if (!todo.checklist) return '0%'
        if (todo.checklist.length <= 0) return '0%'

        let completedTask = 0
        const totalTask = todo.checklist.length
        todo.checklist.map(taskItem => taskItem.status === true ? completedTask += 1 : completedTask)
        const totalStatus = Math.ceil((completedTask / totalTask) * 100)

        if (totalStatus >= 100) return 'Done'

        return `${totalStatus}%`
    }

    const handleTodoStatus = (todo) => {
        props.todoUpdated(todo)
    }

    const handleTaskStatus = (todoID, task) => {
        props.taskUpdated(todoID, task)
    }

    const sortDataByStatus = (data) => {
        return data.sort((a, b) => { return a.status - b.status })
    }

    if (props.todoList <= 0 || !props.todoList) return (
        <div className='todo-page-container'>
            <div className='todo-container'>
                <div className="todo-add-icon-container">
                    <FontAwesomeIcon icon={faPlusCircle} color='white' size='lg' className='todo-add-icon' onClick={() => setCreateModal(true)} />
                </div>
                <h1 className='todo-item-title' style={{ textAlign: 'center' }}>There are no to-do created</h1>
            </div>

            {!createModal ? '' : <TodoCreateModal onSetModal={setCreateModal} />}
            {!updateModal ? '' : <TodoUpdateModal onSetModal={setUpdateModal} itemSelect={todoSelected} />}
        </div >
    )

    return (
        <div className='todo-page-container'>
            <div className='todo-container'>
                <div className="todo-add-icon-container">
                    <FontAwesomeIcon icon={faPlusCircle} color='white' size='lg' className='todo-add-icon' onClick={() => setCreateModal(true)} />
                </div>
                {sortDataByStatus(props.todoList).map(todo =>
                    <div className={`todo-item ${selectedItem === todo.id ? 'active' : ''}`} key={todo.id}>
                        <div className='todo-item-title-container' onClick={() => selectedItem === todo.id ? setSelectedItem('') : setSelectedItem(todo.id)}>
                            <div className='item-title-container'>
                                <label className="checkbox-container">
                                    <input type="checkbox" checked={todo.status} onChange={() => handleTodoStatus(todo)} />
                                    <span className="checkbox-checkmark"></span>
                                </label>
                                <h1 className='todo-item-title'>{todo.memo}</h1>
                            </div>
                            <div className='todo-status-container'>
                                <p className='todo-item-title'>{calcTotalTask(todo)}</p>
                                <FontAwesomeIcon
                                    icon={faEdit}
                                    color='white'
                                    size='lg'
                                    className='todo-add-icon'
                                    onClick={() => {
                                        setUpdateModal(true)
                                        setTodoSelected(todo)
                                    }} />
                            </div>
                        </div>
                        <div className='todo-task-list'>
                            <ol>
                                {sortDataByStatus(todo.checklist).map(task =>
                                    <li key={task.id} className='checklist-container'>
                                        <label className="checkbox-container-mini">
                                            <input type="checkbox" checked={task.status} onChange={() => handleTaskStatus(todo.id, task)} />
                                            <span className="checkbox-checkmark-mini"></span>
                                        </label>
                                        {task.text}
                                    </li>
                                )}
                            </ol>
                        </div>
                    </div>
                )}
            </div>

            {!createModal ? '' : <TodoCreateModal onSetModal={setCreateModal} />}
            {!updateModal ? '' : <TodoUpdateModal onSetModal={setUpdateModal} itemSelect={todoSelected} />}
        </div >
    );
}


const mapStateToProps = state => {
    return { todoList: state.todo }
}
export default connect(mapStateToProps, { todoGetData, todoUpdated, taskUpdated })(ToDo);