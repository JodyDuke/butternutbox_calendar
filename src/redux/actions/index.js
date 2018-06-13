import { CURRENT_MODAL, CHANGE_DAY } from "../constants";

export const currentModal = modal => ({
    type: CURRENT_MODAL,
    modal
})

export const changeDay = int => ({
    type: CHANGE_DAY,
    int
})