import './App.scss';
import React from 'react'
import { connect } from 'react-redux';
import ConverterSide from './components/ConverterSide';
import entities from './entities';
import { setDirection, setAcquirement, setDirectionGroup, setAcquirementGroup } from './actions'

function App (props) {
  const {
    directions,
    filter,
    groupFilters,
    directionSelected,
    acquirementSelected,
    setDirectionGroupFilter,
    setAcquirementGroupFilter,
    setDirectionItemFilter,
    setAcquirementItemFilter
  } = props

  return (
    <div className="App">
      <div className="content-container">
        <ConverterSide
          send
          title={entities.FROM_TITLE}
          filter={filter}
          directions={directions}
          onGroupItemClick={setDirectionGroupFilter}
          directionGroupFilters={groupFilters}
          onChangeDirectionItem={setDirectionItemFilter}
          directionSelected={directionSelected}
        >
        </ConverterSide>
        <hr></hr>
        <ConverterSide 
          title={entities.TO_TITLE}
          filter={filter}
          directions={directions}
          setAcquirementItemFilter={setAcquirementItemFilter}
          onGroupItemClick={setAcquirementGroupFilter}
          directionSelected={directionSelected}
          onChangeDirectionItem={setDirectionItemFilter}
          directionGroupFilters={groupFilters}
          acquirementSelected={acquirementSelected}
        >
        </ConverterSide>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  directions: state.directions,
  filter: state.filter,
  groupFilters: state.groupFilters,
  directionSelected: state.directionSelected,
  acquirementSelected: state.acquirementSelected
})

const mapDispatchToProps = dispatch => ({
  setDirectionGroupFilter: directionGroup => dispatch(setDirectionGroup(directionGroup)),
  setAcquirementGroupFilter: acquirementGroup => dispatch(setAcquirementGroup(acquirementGroup)),
  setDirectionItemFilter: direction => dispatch(setDirection(direction)),
  setAcquirementItemFilter: acquirement => dispatch(setAcquirement(acquirement))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
