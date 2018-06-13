import React, { Component } from 'react';
import Calendar from '../../calendar/calendar';
import { connect } from 'react-redux';
import { currentModal } from '../../../redux/actions'
import Button from '../../buttons/button'

const MapDispatchToProps = dispatch => ({
    currentModal: input => dispatch(currentModal(input))
})

class ConnectedCalendarModal extends Component {
    render() {
        return (
            <div className="calendar-modal-container">
                <div className="calendar-modal">
                    <div className="date-select-container">
                        <div className="arrow">
                            <img src={require('../../../images/left-arrow.png')} />
                        </div>
                        <div className="date">
                            <h4>May 2018</h4>
                        </div>
                        <div className="arrow">
                            <img src={require('../../../images/right-arrow.png')} />
                        </div>
                    </div>
                    <Calendar styles="calendar" />
                    <div className="modal-warning-container">
                        <div className="modal-warning">
                            <p>Delivery dates will change<br />for all upcoming boxes</p>
                        </div>
                    </div>
                    <div className="buttons-container">
                        <Button styles="button cancel" text={["CANCEL,", <br key="0" />, "DON'T CHANGE"]} onClick={() => this.props.currentModal(null)}/>
                        <Button styles="button submit" text="CHANGE DATE" onClick={() => this.props.currentModal(null)} />
                    </div>
                </div>
            </div>
        )
    }
}

const CalendarModal = connect(null, MapDispatchToProps)(ConnectedCalendarModal)

export default CalendarModal