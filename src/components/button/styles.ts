import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/styles/theme'

export const s = StyleSheet.create({
  button: {
    width: '100%',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.tertiary,
    borderRadius: 8,
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 18,
    color: colors.primary,
  },
})
