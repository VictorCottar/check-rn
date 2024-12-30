import { View, Text } from 'react-native'
import { s } from './styles'

export function Welcome() {
  return (
    <View style={s.container}>
      <Text style={s.title}>Check!</Text>
    </View>
  )
}
