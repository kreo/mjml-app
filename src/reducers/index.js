import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import templates from './templates'
import components from './components'
import presets from './presets'
import config from './config'
import alerts from './alerts'

const rootReducer = combineReducers({
  routing,
  templates,
  components,
  presets,
  config,
  alerts,
})

export default rootReducer
