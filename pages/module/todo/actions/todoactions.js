import {getTodoById, addNewTaskService, updateTaskService, removeTaskService} from '../../../service/service'

export const GET_TODO_LIST_BY_ID ='GET_TODO_LIST_BY_ID';
export const GET_TODO_LIST_BY_ID_SUCCESS ='GET_TODO_LIST_BY_ID_SUCCESS';
export const GET_TODO_LIST_BY_ID_FAILURE ='GET_TODO_LIST_BY_ID_FAILURE';

export const ADD_NEW_TASK ='ADD_NEW_TASK';
export const ADD_NEW_TASK_SUCCESS ='ADD_NEW_TASK_SUCCESS';
export const ADD_NEW_TASK_FAILURE ='ADD_NEW_TASK_FAILURE';

export const DELETE_TASK ='DELETE_TASK';
export const DELETE_TASK_SUCCESS ='DELETE_TASK_SUCCESS';
export const DELETE_TASK_FAILURE ='DELETE_TASK_FAILURE';

export const getTodoListById =() =>({
    type: GET_TODO_LIST_BY_ID
});

export const getTodoListByIdSuccess = (todos) =>({
    type: GET_TODO_LIST_BY_ID_SUCCESS,
    payload: todos
})

export const getTodoListByIdFailure =() =>({
    type: GET_TODO_LIST_BY_ID_FAILURE
});

export const fetchGetUsersById = (userId) =>{
    return async(dispatch) =>{
        dispatch(getTodoListById());
        getTodoById(userId).then(data => dispatch(getTodoListByIdSuccess(data)))
    }
};

// add task

export const addNewTask =() =>({
    type: ADD_NEW_TASK
});

export const addNewTaskSuccess = () =>({
    type: ADD_NEW_TASK_SUCCESS,
})

export const addNewTaskFailure =() =>({
    type: ADD_NEW_TASK_FAILURE
});

export const fetchAddNewTask = () =>{
    return async(dispatch) =>{
        dispatch(addNewTask());
        addNewTaskService(userId).then(data => dispatch(addNewTaskSuccess(data)))
    }
}

//delete task
export const deleteTask =() =>({
    type: DELETE_TASK
});

export const deleteTaskSuccess = () =>({
    type: DELETE_TASK_SUCCESS,
})

export const deleteTaskFailure =() =>({
    type: DELETE_TASK_FAILURE
});

export const fetchDeleteTask = () =>{
    return async(dispatch) =>{
        dispatch(deleteTask());
        removeTaskService(userId).then(data => dispatch(deleteTaskSuccess(data)))
    }
}
