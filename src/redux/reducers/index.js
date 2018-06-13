import { combineReducers } from 'redux';
import currentModal from './modal_filter'
import currentCalendar from './calendar';

export default combineReducers({
    currentCalendar,
    currentModal
})