import React, { Component } from 'react';
import { connect } from 'react-redux';
import { days } from '../../utils/days_of_the_week';
import { changeDay } from '../../redux/actions'

const mapStateToProps = state => ({
    store: state.currentCalendar
})

const mapDispatchToProps = dispatch => ({
    changeDay: int => dispatch(changeDay(int))
})

const CalendarNode = (props) => {
    return (
        <div className={props.styles}>
            {props.number}
        </div>
    )
}

class ConnectedCalendar extends Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        if(e.target.className === "calendar-node available") {
            this.props.changeDay(parseInt(e.target.innerHTML, 10))
        }
    }

    render() {
        return (
            <div onClick={this.handleClick} className="calendar-container">
                {days.map((e, k) => {
                    return <div key={k} className="calendar-weekdays">{e}</div>
                })}
                {this.props.store.calendar[this.props.store.currentMonth].days.map((e, k) => {
                    if (Object.keys(e)[0] === this.props.store.activeDay.toString() && this.props.store.activeMonth === this.props.store.currentMonth) {
                        return <CalendarNode key={k} styles="calendar-node active" number={Object.keys(e)} />                        
                    }
                    else if(Object.keys(e)[0]){  
                        return <CalendarNode key={k} styles={Object.values(e)[0] === true ? 'calendar-node available' : 'calendar-node unavailable'} number={Object.keys(e)} />    
                    }
                    //returns empty div to space the beginning of the month
                    return <div key={k}></div>
                })}
            </div>
        )
    }
}


const Calendar = connect(mapStateToProps, mapDispatchToProps)(ConnectedCalendar)

export default Calendar