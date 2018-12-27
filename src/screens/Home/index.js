import React, { Component } from 'react'
import {
  Text,
  View,
  Platform
} from 'react-native'
import { connect } from 'react-redux'
import i18n from '@services/i18n'

import styles from './styles'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n Shake or press menu button for dev menu'
})

class Home extends Component {
  static propTypes = {}

  static navigationOptions = {
    title: 'Home'
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{i18n.t('Home.welcome')}</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    )
  }
}

export default connect(
  null,
  null
)(Home)
