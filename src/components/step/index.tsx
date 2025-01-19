import { View, Text } from 'react-native'
import { IconProps } from '@tabler/icons-react-native'
import { colors } from '@/styles/theme'
import { s } from './styles'

type stepProps = {
  title: string
  description: string
  icon: React.ComponentType<IconProps>
}

export function Step({ title, description, icon: Icon }: stepProps) {
  return (
    <View style={s.container}>
      {Icon && <Icon size={32} color={colors.primary} />}

      <View style={s.details}>
        <Text style={s.title}>{title}</Text>

        <Text style={s.description}>{description}</Text>
      </View>
    </View>
  )
}
