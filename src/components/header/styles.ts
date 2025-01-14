import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/styles/theme'

export const s = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginTop: 22,
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 26,
    color: colors.primary
  }
})