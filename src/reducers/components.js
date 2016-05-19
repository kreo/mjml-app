import { handleActions } from 'redux-actions'
import { fromJS } from 'immutable'

const state = fromJS({
  current: null,
  list: [],
})

export default handleActions({

  // Receive the components list
  RECEIVE_COMPONENTS: (state, { payload: list }) => state.set('list', list),

  // Assign the current components
  SET_COMPONENT: (state, { payload: component }) => state.set('current', component.get('id')),

  // Update the current component
  UPDATE_CURRENT_COMPONENT: (state, { payload: updater }) => {
    const currentList = state.get('list')
    const current = state.get('current')
    const index = currentList.findIndex(component => component.get('id') === current)
    const newList = currentList.update(index, component => updater(component))
    return state.set('list', newList)
  },

  // Update a component based on its id
  UPDATE_COMPONENT: (state, { payload: { id, updater } }) =>
    state.updateIn(['list', state.get('list').findIndex(c => c.get('id') === id)], updater),

  // Reset the current component to null
  RESET_COMPONENT: state => state.set('current', null),

  // Push a new component
  COMPONENT_CREATED: (state, { payload: component }) =>
    state.set('list', state.get('list').unshift(component)),

  // Delete a component from list
  COMPONENT_DELETED: (state, { payload: id }) =>
    state.set('list', state.get('list').delete(state.get('list').findIndex(c => c.get('id') === id))),

}, state)
