import { TouchableOpacity, Text } from 'react-native'
import { s } from "./styles";

type ButtonProps = {
  title: string;
  onPress?: () => void;
}

export function Button({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity
      style={s.button}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={s.title}>{title}</Text>
    </TouchableOpacity>
  )
}