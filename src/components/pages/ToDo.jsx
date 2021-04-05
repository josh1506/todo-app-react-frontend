import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'

import { todoGetData } from '../../app/todo'
import '../assets/css/todo.css'

function ToDo(props) {
    const [selectedItem, setSelectedItem] = useState('')

    useEffect(() => {
        const token = props.auth || localStorage.getItem('auth_token')
        if (!token) props.history.replace('/login')

        props.todoGetData()
    }, [])

    const calcTotalTask = (task) => {
        if (task.length <= 0) return 0

        let completedTask = 0
        const totalTask = task.length
        task.map(taskItem => taskItem.completed === true ? completedTask += 1 : completedTask)
        return Math.ceil((completedTask / totalTask) * 100)
    }

    if (props.todoList <= 0) return (
        <div className='todo-page-container'>
            <div className='todo-container'>
                <h1 className='todo-item-title' style={{ textAlign: 'center' }}>There are no to-do created</h1>
            </div>
        </div >
    )

    return (
        <div className='todo-page-container'>
            <div className='todo-container'>
                {props.todoList.map(todo =>
                    <div className={`todo-item ${selectedItem === todo.id ? 'active' : ''}`} key={todo.id}>
                        <div className='todo-item-title-container' onClick={() => selectedItem === todo.id ? setSelectedItem('') : setSelectedItem(todo.id)}>
                            <h1 className='todo-item-title'>{todo.memo}</h1>
                            <p className='todo-item-title'>{calcTotalTask(todo.checklist)}%</p>
                        </div>
                        <div className='todo-task-list'>
                            <ol>
                                {todo.checklist.map(task =>
                                    <li key={task.id}>{task.text}</li>
                                )}
                            </ol>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}


const mapStateToProps = state => {
    return { todoList: state.todo }
}
export default connect(mapStateToProps, { todoGetData })(ToDo);