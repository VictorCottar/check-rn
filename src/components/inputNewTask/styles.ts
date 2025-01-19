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
    gap: 30,
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 25,
    color: colors.primary,
  },
  input: {
    width: '100%',
    padding: 14,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 8,
    fontSize: 15,
    color: colors.primary,
    fontFamily: fontFamily.regular,
  },
  priority: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 3,
  },
  labelPriority: {
    fontFamily: fontFamily.medium,
    fontSize: 18,
    color: colors.tertiary,
  },
})
