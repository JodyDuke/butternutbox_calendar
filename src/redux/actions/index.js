import { CURRENT_MODAL, CHANGE_DAY, CHANGE_MONTH } from "../constants";

export const currentModal = modal => ({
    type: CURRENT_MODAL,
    modal
})

export const changeDay = int => ({
    type: CHANGE_DAY,
    int
})

export const changeMonth = int => ({
    type: CHANGE_MONTH,
    int
})