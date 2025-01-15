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
    fontSize: 15,
    fontFamily: fontFamily.bold,
  },
  description: {
    color: colors.tertiary,
    fontSize: 12,
    fontFamily: fontFamily.regular,
    width: "90%",
    marginLeft: 6
  },
  priority: {
    color: colors.secondary,
    fontSize: 12,
    marginLeft: 6
  },

})