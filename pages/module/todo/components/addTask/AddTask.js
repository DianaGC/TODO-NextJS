import { Form, Row, Col, Button, Input } from 'antd';
import { fetchAddNewTask } from '../../actions/todoactions';
import { useDispatch } from 'react-redux';

const AddTask = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    let newTask;
    const onFinish = (values) => {
        newTask = {
            "userId": 1,
            "title": values.task,
            "completed": false
        },
        dispatch(fetchAddNewTask(newTask))
        form.resetFields();
    }

    return (
        <Form form={form} onFinish={onFinish} layout="horizontal">
            <Row>
                <Col xs={24} sm={24} md={17} lg={19} xl={20}>
                    <Form.Item name="task" rules={[{ required: true }]}>
                        <Input placeholder="Add a new task" />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={3} lg={5} xl={4}>
                    <Button type="primary" htmlType="add">Add Task</Button>
                </Col>
            </Row>

        </Form>

    )
};
export default AddTask
