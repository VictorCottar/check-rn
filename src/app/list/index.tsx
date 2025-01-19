import React, { useCallback, useState } from "react"
import { Header } from "@/components/header"
import { Priorities } from "@/components/priorities"
import { Task } from "@/components/task"
import { View, FlatList, Modal, TouchableOpacity, Text, Alert } from "react-native"
import { s } from "./styles"
import { colors } from "@/styles/theme"
import { priorities } from "@/utils/priorities"
import { IconX, IconCheck } from "@tabler/icons-react-native"
import { taskStorage, TaskStorage } from "@/storage/task-storage"
import { useFocusEffect } from "expo-router"

export default function Index() {
  const [priority, setPriority] = useState(priorities[0].name)
  const [task, setTask] = useState<TaskStorage>({} as TaskStorage)
  const [tasks, setTasks] = useState<TaskStorage[]>([])
  const [showModal, setShowModal] = useState(false)

  function handleDetails(selected: TaskStorage) {
    setShowModal(true)
    setTask(selected)
  }

  function handleFinish() {
    Alert.alert('Concluir', 'Deseja concluir a tarefa?', [
      { style: 'cancel', text: 'Não' },
      { text: 'Sim', onPress: finishTask }
    ])
  }

  async function finishTask() {
    try {
      await taskStorage.remove(task.id)
      getTasks()
      setShowModal(false)
    } catch (error) {
      Alert.alert('Tarefa', 'Não foi concluir a tarefa')
      console.log(error)
    }
  }

  async function getTasks() {
    try {
      const response = await taskStorage.get()

      const filtered = response.filter(item => item.priority === priority)

      priority === priorities[0].name ? setTasks(response) : setTasks(filtered)

    } catch (error) {
      Alert.alert('Tarefas', 'Não foi possível carregar as tarefas')
    }
  }

  useFocusEffect(useCallback(() => {
    getTasks()
  }, [priority]))

  return (
    <View style={s.container}>
      <Header />

      <View style={s.priorities}>
        <Priorities selected={priority} onChange={setPriority} />
      </View>

      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Task
            name={item.name}
            description={item.description}
            onDetails={() => handleDetails(item)}
          />
        )}
        style={s.tasks}
        contentContainerStyle={s.taskContent}
        showsHorizontalScrollIndicator={false}
      />

      <Modal transparent visible={showModal} animationType="slide">
        <View style={s.modal}>
          <View style={s.modalContent}>
            <View style={s.modalHeader}>
              <TouchableOpacity onPress={() => setShowModal(false)}>
                <IconX size={24} color={colors.primary} />
              </TouchableOpacity>
            </View>

            <Text style={s.modalTaskName}>{task.name}</Text>
            <Text style={s.modalTaskDescription}>{task.description}</Text>
            <Text style={s.modalTaskPriority}>{task.priority}</Text>

            <View style={s.modalFooter}>
              <TouchableOpacity
                onPress={handleFinish}
              >
                <IconCheck size={28} color={colors.primary} />
              </TouchableOpacity>
            </View>

          </View>
        </View>

      </Modal>
    </View>
  )
}