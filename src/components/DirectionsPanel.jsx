import React from 'react'
import DirectionGroupItem from './DirectionGroupItem'
import { filtersTypes, filtersLocalized } from '../entities'

const DirectionsPanel = props => {
    return (
        <div className="converter-side__directions-group" >
            {
                Object.values(filtersTypes).map((type, index) => 
                    <DirectionGroupItem
                        name={filtersLocalized[type]}
                        key={`${type}_${index}`}
                        type={type}
                        selected={props.send
                            ? type === props.directionGroupFilters.directionFilter
                            : type === props.directionGroupFilters.acquirementFilter
                        }
                        directions={props.directions}
                        onGroupItemClick={props.onGroupItemClick}
                        onChangeDirectionItem={props.onChangeDirectionItem}
                    >
                    </DirectionGroupItem>
                )
            }
        </div>
    )
}

export default DirectionsPanel