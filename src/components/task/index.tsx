import { View, Text } from 'react-native';
import { s } from './styles';
import { colors } from '@/styles/theme'
import { IconDots } from '@tabler/icons-react-native'

type TaskProps = {
  name: string
  description: string
  priority: string
  onDetails?: () => void
}

export function Task({ name, description, priority, onDetails }: TaskProps) {
  return (
    <View style={s.container}>
      <View style={s.details}>
        <Text style={s.name}>{name}</Text>
        <Text style={s.description}>{description}</Text>
        <Text style={s.priority}>{priority}</Text>
      </View>
      <View>
        <IconDots size={25} color={colors.primary} />
      </View>
    </View>
  )

}