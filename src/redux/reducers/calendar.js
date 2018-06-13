import { CHANGE_DAY } from '../constants'

const initialState = {
    activeDay: 6,
    calendar: [
        {},
        {1: false},
        {2: true},
        {3: true},
        {4: false},
        {5: false},
        {6: true},
        {7: true},
        {8: false},
        {9: true},
        {10: true},
        {11: false},
        {12: false},
        {13: true},
        {14: true},
        {15: false},
        {16: true},
        {17: true},
        {18: false},
        {19: false},
        {20: true},
        {21: true},
        {22: false},
        {23: true},
        {24: true},
        {25: false},
        {26: false},
        {27: true},
        {28: true},
        {29: false},
        {30: true},
        {31: true}
    ]
}

const currentCalendar = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_DAY:
            return {...state, activeDay: action.int}
        default: 
            return state
    }
}

export default currentCalendar