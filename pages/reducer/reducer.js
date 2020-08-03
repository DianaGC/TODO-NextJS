import { combineReducers } from 'redux';
import todos from '../module/todo/reducers/todo'

const reducer = combineReducers({
    todos
})
export default reducer;
