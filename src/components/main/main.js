import React from 'react';
import { connect } from 'react-redux';
import { currentModal } from '../../redux/actions';
import CalendarSVG from '../../images/calendar';

const mapDispatchToProps = dispatch => ({
    currentModal: input => dispatch(currentModal(input))
})


const ConnectedMain = (props) => {
    return (
        <div className="main">
            <div onClick={() => props.currentModal('CALENDAR')} className="calendar-icon-container">
                <CalendarSVG />
            </div>
        </div>
    )
}

const Main = connect(null, mapDispatchToProps)(ConnectedMain)

export default Main