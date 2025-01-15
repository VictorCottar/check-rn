import React, { useState } from "react"
import { Header } from "@/components/header"
import { Priorities } from "@/components/priorities"
import { Task } from "@/components/task"
import { View, FlatList } from "react-native"
import { s } from "./styles"
import { priorities } from "@/utils/priorities"

export default function Index() {
  const [priority, setPriority] = useState(priorities[0].name)
  const [tasks, setTasks] = useState([
    { id: "1", name: "Commit", description: "Fazer o commit do componente Task ", priority: "Baixa" },
    { id: "2", name: "Terminar app", description: "Terminar o projeto Check!", priority: "Média" },
    { id: "4", name: "Fazer curso da Alura", description: "Description 4 Description 4", priority: "Alta" },
    { id: "5", name: "Modal", description: "Desenvolver a interação do Modal", priority: "Baixa" },
    
  ])


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
            priority={item.priority}
            onDetails={() => { }}
          />
        )}
        style={s.tasks}
        contentContainerStyle={s.taskContent}
        showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}