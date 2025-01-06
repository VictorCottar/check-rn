import { Text, Pressable, PressableProps } from 'react-native'
import { colors } from '@/styles/theme'
import { s } from './styles'

type Props = PressableProps & {
  name: string
  isSelected: boolean
}

export function Priority({ name, isSelected, ...props }: Props) {
  const color = isSelected ? colors.primary : colors.tertiary
  
  return (
    <Pressable style={s.container} {...props}>
      <Text style={[s.name, { color }]}>{name}</Text>
    </Pressable>
  )
}