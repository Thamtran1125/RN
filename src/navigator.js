import { createSwitchNavigator } from 'react-navigation'

import {
  MainDrawerNav,
  GeneralStackNav
} from './routes'

const AppNavigator = createSwitchNavigator({
  MainDrawerNavigator: {
    screen: MainDrawerNav
  },
  GeneralNavigator: {
    screen: GeneralStackNav
  }
})

export default AppNavigator
