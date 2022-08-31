export const SET_DIRECTION_GROUP = 'SET_DIRECTION_GROUP'
export const SET_ACQUIREMENT_GROUP = 'SET_ACQUIREMENT_GROUP'
export const SET_DIRECTION = 'SET_DIRECTION'
export const SET_ACQUIREMENT = 'SET_ACQUIREMENT'

export function setDirectionGroup(payload) {
    return {
        type: SET_DIRECTION_GROUP,
        payload
    }
}

export function setAcquirementGroup(payload) {
    return {
        type: SET_ACQUIREMENT_GROUP,
        payload
    }
}

export function setDirection(payload) {
    return {
        type: SET_DIRECTION,
        payload
    }
}

export function setAcquirement(payload) {
    return {
        type: SET_ACQUIREMENT,
        payload
    }
}
