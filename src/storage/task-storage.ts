import AsyncStorage from '@react-native-async-storage/async-storage'

const TASKS_STORAGE_KEY = 'tasks-storage'

export type TaskStorage = {
  id: string
  name: string
  description: string
  priority: string
}

async function get(): Promise<TaskStorage[]> {
  const storage = await AsyncStorage.getItem(TASKS_STORAGE_KEY)
  const response = storage ? JSON.parse(storage) : []

  return response
}

async function save(newTask: TaskStorage) {
  try {
    const storage = await get()
    const updated = JSON.stringify([...storage, newTask])

    await AsyncStorage.setItem(TASKS_STORAGE_KEY, updated)
  } catch (error) {
    throw error
  }
}

async function remove(id: string) {
  try {
    const storage = await get()

    const updated = storage.filter((task) => task.id !== id)

    await AsyncStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(updated))

  } catch(error) {
    throw error
  }
}

export const linkStorage = { get, save, remove }