import React from 'react'
import { Text, View, TextInput } from 'react-native'
import { Button } from '@/components/button'
import { s } from './styles'
import { colors } from '@/styles/colors'

export function InputNewTask() {
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

        <Button title="Adicionar" onPress={() => { }} />
      </View>
    </View>
  )
}