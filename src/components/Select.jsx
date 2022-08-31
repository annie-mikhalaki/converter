import React from 'react'
import { groupItems, filtersTypes } from '../entities'

export function getReceiveOptions(props) {
    const { to: receiveOptions = [] } = props.filter.find(item => item.from.code === props.directionSelected) || {}
    if (props.directionGroupFilters.acquirementFilter === filtersTypes.ALL) {
        return receiveOptions
    } else if (props.directionGroupFilters.acquirementFilter === filtersTypes.CRYPTA) {
        return receiveOptions.filter(option => groupItems[filtersTypes.CRYPTA].includes(option.code))
    } else if (props.directionGroupFilters.acquirementFilter === filtersTypes.BANKS) {
        return receiveOptions.filter(option => groupItems[filtersTypes.BANKS].includes(option.code))
    } else if (props.directionGroupFilters.acquirementFilter === filtersTypes.CASH) {
        return receiveOptions.filter(option => groupItems[filtersTypes.CASH].includes(option.code))
    }
}

const Select = props => {
    function onChangeDirectionItem(event) {
        props.onChangeDirectionItem(event.target.value)
    }

    function getDirectionsFiltered(types) {
        return props.directions.filter(direction => types.includes(direction.code))
            .map((direction, index) =>
                <option
                    key={`${direction.code}_${index}`}
                    type={direction.code}
                    value={direction.code}
                >
                    {direction.name}
                </option>
            )
    }

    const receiveOptions = getReceiveOptions(props)

    return (
        <>
            {props.send &&
                <select onChange={onChangeDirectionItem}>
                    {
                        props.directionGroupFilters.directionFilter === filtersTypes.ALL &&
                        props.directions.map((direction, index) =>
                            <option
                                key={`${direction.code}_${index}`}
                                type={direction.code}
                                value={direction.code}
                            >
                                {direction.name}
                            </option>)
                    }
                    {props.directionGroupFilters.directionFilter === filtersTypes.CRYPTA && getDirectionsFiltered(groupItems[filtersTypes.CRYPTA])}
                    {props.directionGroupFilters.directionFilter === filtersTypes.BANKS && getDirectionsFiltered(groupItems[filtersTypes.BANKS])}
                    {props.directionGroupFilters.directionFilter === filtersTypes.CASH && getDirectionsFiltered(groupItems[filtersTypes.CASH])}
                </select>
            }
            {
                !props.send &&
                <select onChange={onChangeDirectionItem} disabled={receiveOptions.length === 0}>
                    {
                        receiveOptions.length === 0 &&
                        <option>
                            Нет опций
                        </option>
                    }
                    {
                        receiveOptions.length && 
                            receiveOptions.map((item, index) =>
                                <option
                                    key={`${item.code}_${index}`}
                                    type={item.code}
                                    value={item.code}
                                >
                                    {item.name}
                                </option>)
                    }
                </select>
            }
        </>
    )
}

export default Select
    