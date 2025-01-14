import { FlatList } from "react-native"
import { s } from './styles'
import { priorities } from "@/utils/priorities"
import { Priority } from "@/components/priority"

type Props = {
  selected: string,
  onChange: (priority: string) => void,
  typePriority?: string
}

export function Priorities({ selected, onChange, typePriority }: Props) {
  return (
    <FlatList
      data={typePriority === 'newTask' ? priorities.slice(1) : priorities}
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