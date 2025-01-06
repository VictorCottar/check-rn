import React, { useState, useRef } from 'react'
import { Text, View, TextInput } from 'react-native'
import { Button } from '@/components/button'
import { s } from './styles'
import { colors } from '@/styles/colors'
import { Picker } from '@react-native-picker/picker';

export function InputNewTask() {
  const [selectedPriority, setSelectedPriority] = useState();

  const pickerRef = useRef();

  return (
    <View style={s.container}>
      <Text style={s.title}>Nova tarefa</Text>

      <View style={s.containerInput}>
        <TextInput
          placeholder="Digite o nome da tarefa"
          placeholderTextColor={colors.tertiary}
          style={s.input}
        />

        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          placeholder="Digite a descrição da tarefa"
          placeholderTextColor={colors.tertiary}
          style={s.input}
        />


        <Picker
          ref={pickerRef}
          selectedValue={selectedPriority}
          onValueChange={(itemValue) =>
            setSelectedPriority(itemValue)
          }
          style={s.picker}
          dropdownIconColor={colors.primary}
        >
          <Picker.Item label="Selecione a prioridade" value="" />
          <Picker.Item label="Alta" value="Alta" />
          <Picker.Item label="Média" value="Media" />
          <Picker.Item label="Baixa" value="Baixa" />
        </Picker>

        <Button title="Adicionar" onPress={() => { }} />
      </View>
    </View>
  )
}