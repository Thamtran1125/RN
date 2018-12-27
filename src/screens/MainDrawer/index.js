import React, { PureComponent } from 'react'
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import styles from './styles'

class Drawer extends PureComponent {
  static propTypes = {
    drawerProps: PropTypes.object.isRequired
  }

  closeDawer = () => {
    const { drawerProps } = this.props
    drawerProps.navigation.closeDrawer()
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerBlock}>
          <View style={styles.closeContain}>
            <TouchableOpacity style={styles.touchClose} onPress={this.closeDawer}>
              <Image style={styles.iconClose} source={require('../../../assets/images/close-drawer.png')} />
            </TouchableOpacity>
          </View>


          <View style={styles.titleContain}>
            <Text style={styles.titleText}>Have a nice day Laura!</Text>
            <Text style={styles.titleText}>Welcome to ahihi</Text>
          </View>
        </View>

        <View style={styles.menuBlock}>
          <ScrollView style={styles.menuContain}>

            <TouchableOpacity style={styles.touchMenuItem}>
              <Text style={styles.menuItemText}>Item 1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchMenuItem}>
              <Text style={styles.menuItemText}>Item 2</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchMenuItem}>
              <Text style={styles.menuItemText}>Item 3</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchMenuItem}>
              <Text style={styles.menuItemText}>Item 4</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchMenuItem}>
              <Text style={styles.menuItemText}>Item 5</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.touchMenuItem, { paddingBottom: 30 }]}>
              <Text style={styles.menuItemText}>Item 6</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.footerBlock}>
          <Text style={styles.versionText}>Version 2.10 (2018)</Text>
        </View>
      </View>
    )
  }
}

export default connect(
  null,
  null
)(Drawer)
