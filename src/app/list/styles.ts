import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/styles/theme'

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
    borderTopColor: colors.tertiary,
  },
  taskContent: {
    gap: 35,
    padding: 24,
    paddingBottom: 100,
  },
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: colors.backgroundModal,
    borderTopWidth: 1,
    borderTopColor: colors.primary,
    paddingBottom: 30,
    padding: 24,
    gap: 10,
  },
  modalHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  modalTaskName: {
    fontSize: 20,
    fontFamily: fontFamily.bold,
    color: colors.primary,
  },
  modalTaskDescription: {
    color: colors.tertiary,
    fontSize: 16,
    fontFamily: fontFamily.regular,
    marginLeft: 4,
  },
  modalTaskPriority: {
    color: colors.tertiary,
    fontSize: 16,
    fontFamily: fontFamily.regular,
    marginLeft: 4,
  },
  modalFooter: {
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.primary,
    paddingVertical: 20,
  },
})
