import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { has, get } from 'lodash'
import Ionicons from 'react-native-vector-icons/Ionicons'

import styles from '../theme/styles'

export const navigationHeader = (navigation, headerTitle, isHasDrawer = false) => {
  const isReset = get(navigation, 'state.params.isReset', false)
  const isHasBackArrow = has(navigation, 'state.params') && !isReset

  const openDrawer = () => {
    navigation.openDrawer()
  }

  return {
    headerLeft: (
      <View>
        {isHasBackArrow && (
          <TouchableOpacity style={styles.headerLeft} onPress={() => navigation.goBack()}>
            <Image style={styles.backIcon} source={require('../../assets/images/back-arrow.png')} />
          </TouchableOpacity>
        )}
      </View>
    ),
    headerTitle: (
      <View style={styles.headerContain}>
        <Image style={{ width: 100, height: 100 }} source={require('../../assets/images/logo.png')} />
      </View>
    ),
    headerRight: (
      <View style={styles.headerRight}>
        {isHasDrawer && (
          <TouchableOpacity style={styles.headerRightBtn} onPress={openDrawer}>
            <Ionicons name="ios-menu" size={30} style={styles.imgMenu} color="#e7a933" />
          </TouchableOpacity>
        )}
      </View>
    )
  }
}
