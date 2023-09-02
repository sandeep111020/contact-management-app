import {combineReducers} from 'redux';
import contacts from './contacts/addContactReducer';
const rootReducer = combineReducers({
contacts,
});
export default rootReducer;