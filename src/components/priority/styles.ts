import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/styles/theme'

export const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  name: {
    fontSize: 16,
    fontFamily: fontFamily.bold
  }
})