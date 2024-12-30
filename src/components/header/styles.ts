import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/styles/theme'

export const s = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginTop: 18,
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 26,
    color: colors.primary
  },
  line: {
    width: '100%',
    height: 0.2,
    backgroundColor: colors.primary,
  }
})