import { createAction } from 'redux-actions'

import defaultComponent from 'assets/defaultComponent'

/**
 * Create a new component
 */

const componentCreated = createAction('COMPONENT_CREATED')

export const createNewComponent = (content = defaultComponent) => dispatch => {
  console.log(content)
}
