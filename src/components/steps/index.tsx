import { View, Text } from 'react-native'
import { IconCheck, IconCheckupList, IconListNumbers } from '@tabler/icons-react-native';
import { s } from "./styles";
import { Step } from '../step';


export function Steps() {
  return (
    <View style={s.container}>
      <Text style={s.title}>Veja como funciona:</Text>

      <Step
        icon={IconCheck}
        title='Objetivos'
        description='Quebre suas metas em tarefas menores e acompanhe seu progresso aos poucos.'
      />

      <Step
        icon={IconCheckupList}
        title='Organize suas tarefas'
        description='Reuna seus compromissos em um só lugar'
      />

      <Step
        icon={IconListNumbers}
        title='Prioridades'
        description='Defina as prioridades das suas tarefas e organize seu dia'
      />

    </View>
  )
}