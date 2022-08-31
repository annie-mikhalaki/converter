import { filtersTypes } from '../entities'
import { SET_DIRECTION_GROUP, SET_ACQUIREMENT_GROUP, SET_DIRECTION, SET_ACQUIREMENT  } from '../actions'
import directions from '../data/directions'
import filter from '../data/filter'

const initialState = {
    directions: directions,
    filter: filter,
    groupFilters: {
        directionFilter: filtersTypes.ALL,
        acquirementFilter: filtersTypes.ALL
    },
    directionSelected: directions[0].code,
    acquirementSelected: directions[0].code
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_DIRECTION_GROUP:
            return {
                ...state,
                groupFilters: {
                    directionFilter: action.payload,
                    acquirementFilter: filtersTypes.ALL
                }
            }
        case SET_ACQUIREMENT_GROUP:
            return {
                ...state,
                groupFilters: {
                    ...state.groupFilters,
                    acquirementFilter: action.payload
                }
            }
        case SET_DIRECTION:
            return {
                ...state,
                directionSelected: action.payload
            }
        case SET_ACQUIREMENT:
            return {
                ...state,
                acquirementSelected: action.payload
            }
        default:
            return state
    }
}

export default reducer