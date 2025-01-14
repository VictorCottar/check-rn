import React, { useState } from 'react'
import { Text, View, TextInput, Alert } from 'react-native'
import { Button } from '@/components/button'
import { s } from './styles'
import { colors } from '@/styles/colors'
import { Priorities } from '@/components/priorities'
import { linkStorage } from '@/storage/task-storage'
import { router } from 'expo-router'

export function InputNewTask() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('')

  async function handleAdd() {
    try {
      if (!name.trim()) {
        return Alert.alert('Nome', 'Digite o nome da tarefa')
      }

      if (!description.trim()) {
        return Alert.alert('Descrição', 'Digite a descrição da tarefa')
      }

      if (!priority) {
        return Alert.alert('Prioridade', 'Selecione uma prioridade para a tarefa')
      }

      await linkStorage.save({
        id: new Date().getTime().toString(),
        name,
        description,
        priority
      })

      Alert.alert('Sucesso', 'Tarefa adicionada com sucesso', [
        {
          text: 'Ok',
          onPress: () => router.push('/list')
        }
      ])

    } catch (error) {
      return Alert.alert('Erro', 'Não foi possível adicionar a tarefa')
    }
  }

  return (
    <View style={s.container}>
      <Text style={s.title}>Nova tarefa</Text>

      <View style={s.containerInput}>
        <TextInput
          placeholder="Digite o nome da tarefa"
          placeholderTextColor={colors.tertiary}
          style={s.input}
          onChangeText={setName}
        />

        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          placeholder="Digite a descrição da tarefa"
          placeholderTextColor={colors.tertiary}
          style={s.input}
          onChangeText={setDescription}
        />

        <View style={s.priority}>
          <Text style={s.labelPriority}>Prioridade da tarefa</Text>
          <Priorities selected={priority} onChange={setPriority} typePriority='newTask' />
        </View>

        <Button title="Adicionar" onPress={handleAdd} />
      </View>
    </View>
  )
}