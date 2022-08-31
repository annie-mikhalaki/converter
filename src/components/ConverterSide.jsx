import React from 'react'
import DirectionsPanel from './DirectionsPanel';
import Input from './Input';
import Select from './Select';

const ConverterSide = props => {
    return (
        <div className="converter-side">
            <div className="converter-side__title">{props.title}</div>
            <DirectionsPanel
                send={props.send}
                onGroupItemClick={props.onGroupItemClick}
                directionGroupFilters={props.directionGroupFilters}
                onChangeDirectionItem={props.onChangeDirectionItem}
                directions={props.directions}
            />
            <Input />
            <Select
                send={props.send}
                filter={props.filter}
                directionGroupFilters={props.directionGroupFilters}
                onChangeDirectionItem={props.onChangeDirectionItem}
                directionSelected={props.directionSelected}
                directions={props.directions}
            />
        </div>
    )
}

export default ConverterSide