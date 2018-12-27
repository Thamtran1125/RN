import { persistCombineReducers } from 'redux-persist'
import { createFilter } from 'redux-persist-transform-filter'
import storage from 'redux-persist/lib/storage'

import nav from './nav'
import setting from './setting'

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['setting'],
  transforms: [
    createFilter('setting', ['language', 'location'])
  ]
}

const rootReducer = {
  nav,
  setting
}

export default persistCombineReducers(rootPersistConfig, rootReducer)
