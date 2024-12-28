import { View, Text } from 'react-native'
import { IconSquareCheck } from '@tabler/icons-react-native'
import { colors } from '@/styles/theme'
import { s } from './styles'

export function Welcome() {
  return (
    <View style={s.container}>
      <Text style={s.title}>Check!</Text>
      <IconSquareCheck size={42} color={colors.primary} />
    </View>
  )
}
