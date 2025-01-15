import { StyleSheet } from 'react-native';
import { colors } from '@/styles/theme';

export const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  priorities: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tasks: {
    borderTopWidth: 1,
    borderTopColor: colors.tertiary
  },
  taskContent: {
    gap: 35,
    padding: 24,
    paddingBottom: 100,
  }
})