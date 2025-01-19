import { View, Text, TouchableOpacity } from 'react-native'
import { IconDots } from '@tabler/icons-react-native'
import { s } from './styles'
import { colors } from '@/styles/theme'

type TaskProps = {
  name: string
  description: string
  onDetails?: () => void
}

export function Task({ name, description, onDetails }: TaskProps) {
  return (
    <View style={s.container}>
      <View style={s.details}>
        <Text style={s.name}>{name}</Text>
        <Text style={s.description}>{description}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={onDetails}>
          <IconDots size={25} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
