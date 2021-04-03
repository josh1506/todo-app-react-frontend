import React, { useState } from 'react';

import '../assets/css/todo.css'

function ToDo(props) {
    const [selectedItem, setSelectedItem] = useState('')
    const [todoList, setTodoList] = useState([
        {
            id: 1,
            title: 'Todo',
            taskList: [
                {
                    id: 1,
                    message: 'Task todo',
                    completed: true
                },
                {
                    id: 2,
                    message: 'Task todo',
                    completed: true
                },
                {
                    id: 3,
                    message: 'Task todo',
                    completed: true
                },
            ]
        },
        {
            id: 2,
            title: 'Todo',
            taskList: [
                {
                    id: 1,
                    message: 'Task todo',
                    completed: true
                },
                {
                    id: 2,
                    message: 'Task todo',
                    completed: true
                },
                {
                    id: 3,
                    message: 'Task todo',
                    completed: false
                },
            ]
        },
        {
            id: 3,
            title: 'Todo',
            taskList: [
                {
                    id: 1,
                    message: 'Task todo',
                    completed: false
                },
                {
                    id: 2,
                    message: 'Task todo',
                    completed: false
                },
                {
                    id: 3,
                    message: 'Task todo',
                    completed: true
                },
            ]
        }
    ])

    const calcTotalTask = (task) => {
        let completedTask = 0
        const totalTask = task.length
        task.map(taskItem => taskItem.completed === true ? completedTask += 1 : completedTask)
        // console.log(completedTask, totalTask)
        return Math.ceil((completedTask / totalTask) * 100)
    }

    return (
        <div className='todo-page-container'>
            <div className='todo-container'>
                {todoList.map(todo =>
                    <div className={`todo-item ${selectedItem === todo.id ? 'active' : ''}`}>
                        <div className='todo-item-title-container' onClick={() => selectedItem === todo.id ? setSelectedItem('') : setSelectedItem(todo.id)}>
                            <h1 className='todo-item-title'>{todo.title}</h1>
                            <p className='todo-item-title'>{calcTotalTask(todo.taskList)}%</p>
                        </div>
                        <div className='todo-task-list'>
                            <ol>
                                {todo.taskList.map(task =>
                                    <li key={task.id}>{task.message}</li>
                                )}
                            </ol>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ToDo;