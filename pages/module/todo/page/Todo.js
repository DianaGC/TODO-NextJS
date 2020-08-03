import React from 'react';
import AddTask from '../components/addTask/addTask';
import { Card } from 'antd';
import TodoList from '../components/todoList/todoList';

const Todo = () => {
    return (
        <>
            <Card >
                <AddTask />
            </Card>
            <Card>
                <TodoList />
            </Card>
        </>
    )
}
export default Todo
