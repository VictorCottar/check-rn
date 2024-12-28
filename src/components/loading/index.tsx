import { ActivityIndicator } from 'react-native'
import { s } from './styles'
import { colors } from '@/styles/theme'

export function Loading() {
  return <ActivityIndicator color={colors.primary} style={s.container} />
}