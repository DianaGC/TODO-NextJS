import { Tooltip, Tag, List, Button, Switch, Popconfirm } from 'antd';
import Icon, { CloseOutlined, CheckOutlined, EditOutlined } from '@ant-design/icons';
import { fetchDeleteTask } from '../../actions/todoactions';
import { useSelector, useDispatch } from 'react-redux';

const TodoItem = (props) => {
  const dispatch = useDispatch();
  const deleteTask = (task) => {
    //implment to delete task
    // call action to delete task
    dispatch(fetchDeleteTask(task))
  }
  const updateTask = (task) => {
    //implment to delete task
    // call action to delete task
    dispatch(fetchDeleteTask(task))
  }

  return (
    <List.Item key={props.todo.id}
      actions={[
        <Tooltip
          title={props.todo.completed ? 'Mark as uncompleted' : 'Mark as completed'}
        >
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            onChange={() => { }}
            defaultChecked={props.todo.completed}
          />
        </Tooltip>,
        <Popconfirm
          title="Are you sure you want to delete?"
          onConfirm={() => {
            onTodoRemoval(todo);
          }}
        >
          <Button onClick={deleteTask(props.todo.id)}>
            <CloseOutlined></CloseOutlined>
          </Button>
        </Popconfirm>,
        <Button onClick={updateTask(props.todo.id)}>
          <EditOutlined />
        </Button>
      ]}
    >
      <Tag color={props.todo.completed ? 'green' : 'red'}>
        {props.todo.completed ? <CheckOutlined /> : <CloseOutlined />}
      </Tag>
      <div >{props.todo.title}</div>
    </List.Item>
  )
}
export default TodoItem
