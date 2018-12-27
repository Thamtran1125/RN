import { StyleSheet, Platform } from 'react-native'

const isAndroidLower5 = Platform.OS === 'android' && Platform.Version < 21

let headerShadow = {
  zIndex: 999,
  elevation: 3
}

if (isAndroidLower5) {
  headerShadow = {
    borderBottomWidth: 1,
    borderBottomColor: '#ebebeb'
  }
}

const themeStyles = StyleSheet.create({
  headerContain: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  headerLeftText: {
    fontWeight: '600',
    fontSize: 13,
    color: '#80808b',
    paddingLeft: 10
  },
  headerTitle: {
    fontWeight: '200',
    fontSize: 19,
    color: '#605d5d'
  },
  headerRightText: {
    fontWeight: '600',
    fontSize: 13,
    color: '#80808b',
    paddingRight: 10
  },
  headerLeft: {
    justifyContent: 'center'
  },
  headerRight: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 5
  },
  headerRightBtn: {
    justifyContent: 'center'
  },
  imgMenu: {
    margin: 5
  },
  imgFilter: {
    width: 24,
    height: 24,
    margin: 5
  },
  backIcon: {
    width: 19,
    height: 14,
    margin: 10
  },
  headerShadow
})

export const COLORS = {
  textColorWhite: '#ffffff',
  textColorYellow: '#edd233',
  textColorGray: '#6c6c6c',
  textColorDark: '#030220',
  backgroundColorLight: '#ffffff',
  backgroundColorDark: '#1b1735',
  backgroundColorDarker: '#0b0727',
  backgroundColorDarkest: '#030220',
  backgroundColorYellow: '#edd233',
  borderColor: '#343242'
}

export default themeStyles
