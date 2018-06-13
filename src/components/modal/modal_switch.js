import React from 'react';
import { connect } from 'react-redux';
import Calendar from './calendar/calendar'

const ModalWindow = props => {
    switch (props.currentModal) {
        case 'CALENDAR':
            return <Calendar />
        default:
            return null
    }
}

export default connect(state => state)(ModalWindow);




