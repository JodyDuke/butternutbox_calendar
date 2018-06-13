import React, { Component } from 'react';
import { connect } from 'react-redux';
import { days } from '../../utils/days_of_the_week';

const mapStateToProps = state => ({
    store: state.currentCalendar
})

const CalendarNode = (props) => {
    return (
        <div className={props.styles}>
            {props.number}
        </div>
    )
}

class ConnectedCalendar extends Component {
    render() {
        return (
            <div className="calendar-container">
                {days.map((e, k) => {
                    return <div key={k} className="calendar-weekdays">{e}</div>
                })}
                {this.props.store.calendar.map((e, k) => {
                    if(Object.values(e)[0] === true) {
                        return <CalendarNode key={k} styles="calendar-node available" number={Object.keys(e)} />
                    }

                    return <CalendarNode key={k} styles="calendar-node unavailable" number={Object.keys(e)}/>

                })}
            </div>
        )
    }
}


const Calendar = connect(mapStateToProps)(ConnectedCalendar)

export default Calendar