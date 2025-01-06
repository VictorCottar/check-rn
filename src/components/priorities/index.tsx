import { FlatList } from "react-native"
import { s } from './styles'
import { priorities } from "@/utils/priorities"
import { Priority } from "@/components/priority"

type Props = {
  selected: string,
  onChange: (priority: string) => void
}

export function Priorities({ selected, onChange }: Props) {
  return (
    <FlatList
      data={priorities}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Priority
          name={item.name}
          isSelected={item.name === selected}
          onPress={() => onChange(item.name)}
        />
      )}
      horizontal
      style={s.container}
      contentContainerStyle={s.content}
      showsHorizontalScrollIndicator={false}
    />
  )
}