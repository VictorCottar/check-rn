import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/styles/theme'

export const s = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 18,
  },
  containerInput: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 18,
    gap: 40
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 26,
    color: colors.primary
  },
  input: {
    width: '100%',
    padding: 16,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 8,
    fontSize: 18,
  }
})