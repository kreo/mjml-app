import { createAction } from 'redux-actions'
import { Map } from 'immutable'
import shortid from 'shortid'

import defaultComponent from 'assets/defaultComponent'

/**
 * Create a new component
 */

const componentCreated = createAction('COMPONENT_CREATED')

export const createNewComponent = (content = defaultComponent) => dispatch => {

  const now = new Date()
  const newComponent = Map({
    id: shortid.generate(),
    name: 'Custom component',
    content,
    creationDate: now,
    modificationDate: now,
  })

  // push to component list
  dispatch(componentCreated(newComponent))

  // assign current component
  dispatch(setComponent(newComponent))

  // save to file system
  dispatch(saveComponent())

}

/**
 * Set current
 */
export const setComponent = createAction('SET_COMPONENT')

/**
 * Save the current component to fs
 */
export const saveComponent = () => (dispatch, getState) => {

  const state = getState()
  const { components } = state

  return dispatch(saveComponentWithId(components.get('current')))

}

/**
 * Save a given component to fs
 */
export const saveComponentWithId = id => (dispatch, getState) => {

  const state = getState()
  const { components } = state

  const list = components.get('list')
  const component = list.find(c => c.get('id') === id)

  console.log('sazing', component)

}
