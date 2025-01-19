import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '@/styles/theme';

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    gap: 12,
  },
  details: {
    flex: 1,
  },
  name: {
    color: colors.primary,
    fontSize: 16,
    fontFamily: fontFamily.bold,
  },
  description: {
    color: colors.tertiary,
    fontSize: 13,
    fontFamily: fontFamily.regular,
    width: "90%",
    marginLeft: 4
  }
})