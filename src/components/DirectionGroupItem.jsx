import React from 'react'
import { groupItems } from  '../entities'

const DirectionGroupItem = props => {
    function handleClick() {
        const { onGroupItemClick, onChangeDirectionItem, type } = props
        onGroupItemClick(type)
        onChangeDirectionItem(groupItems[type]?.[0] || props.directions[0].code)
    }
    return (
        <div className={`direction-group__item${props.selected ? '_selected' : ''}`} onClick={handleClick}>{props.name}</div>
    )
}

export default DirectionGroupItem