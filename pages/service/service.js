import axios from 'axios';
const todoURL = `${process.env.API_URL_TODOS}`;

export const getTodos = () => (
    axios.get(todoURL)
        .then(response => response.data)
        .catch(error => console.log(error))
)

export const getTodoById = (id) => (
    axios.get(todoURL + '?userId=' + id)
        .then(response => response.data)
        .catch(error => console.log(error))
)

export const addNewTaskService = (newTask) => (
    axios.get(todoURL, newTask)
        .then(res => res)
        .catch(error => error)
)

export const updateTaskService = () => (
    axios.patch(todoURL +'/1')
        .then(res => res)
        .catch(error => error)
)

export const removeTaskService = () => (
    axios.delete(todoURL + '/1')
        .then(res => res)
        .catch(error => error)
)
