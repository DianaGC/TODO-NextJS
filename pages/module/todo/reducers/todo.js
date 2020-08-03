import { GET_TODO_LIST_BY_ID_SUCCESS } from "../actions/todoactions";

const initialState = {
    todoList:[]
}

const todoReducer = (state = initialState, action) => {
    console.log('initialReducer', action.payload)
    switch (action.type) {
        case GET_TODO_LIST_BY_ID_SUCCESS:
            return {
                ...state,
                todoList: action.payload
            }
        default:
            return state
    }
};

export default todoReducer;
