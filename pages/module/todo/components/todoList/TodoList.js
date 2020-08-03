import { List } from 'antd';
import TodoItem from '../todoItem/TodoItem';
import { useSelector } from 'react-redux';
import _ from 'underscore';

const TodoList = () => {
    const todos = useSelector((state) => _.sortBy(state.todos.todoList, 'completed'));

    return (
        <List
            locale={{ emptyText: "nothing to do" }}
            dataSource={todos}
            renderItem={item => (
                <TodoItem todo={item} />
            )}
            pagination={{ position: 'bottom', pageSize: 10 }} />
    )
}

export default TodoList
