import React, { Component } from 'react';
import Calendar from '../../calendar/calendar';
import { connect } from 'react-redux';
import { currentModal, changeMonth } from '../../../redux/actions'
import Button from '../../buttons/button'

const mapDispatchToProps = dispatch => ({
    currentModal: input => dispatch(currentModal(input)),
    changeMonth: input => dispatch(changeMonth(input)) 
})

const mapStateToProps = state => ({
    state: state
})

class ConnectedCalendarModal extends Component {
    render() {
        return (
            <div className="calendar-modal-container">
                <div className="calendar-modal">
                    <div className="date-select-container">
                        <div className="arrow" onClick={() => this.props.changeMonth(this.props.state.currentCalendar.currentMonth - 1)}>
                            <img alt="left arrow" src={require('../../../images/left-arrow.png')} />
                        </div>
                        <div className="date">
                            <h4>{this.props.state.currentCalendar.calendar[this.props.state.currentCalendar.currentMonth].month} {this.props.state.currentCalendar.calendar[this.props.state.currentCalendar.currentMonth].year}</h4>
                        </div>
                        <div className="arrow" onClick={() => this.props.changeMonth(this.props.state.currentCalendar.currentMonth + 1)}>
                            <img alt="right arrow" src={require('../../../images/right-arrow.png')} />
                        </div>
                    </div>
                    <Calendar />
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

const CalendarModal = connect(mapStateToProps, mapDispatchToProps)(ConnectedCalendarModal)

export default CalendarModal