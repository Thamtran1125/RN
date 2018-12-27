import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  headerBlock: {
    flex: 4,
    backgroundColor: '#b4b4b4'
  },
  closeContain: {
    flexDirection: 'row',
    paddingTop: 20
  },
  touchClose: {
    marginLeft: 'auto'
  },
  iconClose: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  coverContain: {
    flexDirection: 'row'
  },
  cover: {
    width: 187,
    height: 43,
    marginLeft: 'auto',
    marginRight: 48
  },
  titleContain: {
    paddingTop: 12
  },
  titleText: {
    fontWeight: '400',
    marginLeft: 'auto',
    marginRight: 51,
    opacity: 0.8,
    fontSize: 14,
    color: '#727272'
  },
  menuBlock: {
    flex: 10,
    backgroundColor: '#fff'
  },
  menuContain: {
    paddingTop: 10
  },
  touchMenuItem: {
    marginLeft: 'auto',
    marginTop: 15
  },
  menuItemText: {
    fontWeight: '500',
    marginRight: 51,
    fontSize: 18,
    color: 'rgba(29, 30, 31, 0.77)'
  },
  menuSunItemText: {
    fontWeight: '200',
    marginRight: 62,
    fontSize: 16,
    opacity: 0.85,
    color: 'rgba(29, 30, 31, 0.53)'
  },
  footerBlock: {
    flex: 1
  },
  versionText: {
    fontWeight: '200',
    paddingTop: 8,
    marginLeft: 'auto',
    marginRight: 50,
    opacity: 0.8,
    fontSize: 11,
    color: 'rgba(29, 30, 31, 0.53)'
  }

})

export default styles
