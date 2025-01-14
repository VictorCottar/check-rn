import React from "react"
import { Header } from "@/components/header"
import { Priorities } from "@/components/priorities"
import { View } from "react-native"
import { s } from "./styles"


export default function Index() {
  return (
    <View style={s.container}>
      <Header />

      <View style={s.priorities}>
        <Priorities selected="Baixa" onChange={(priority) => console.log(priority)}  />
      </View>

    </View>
  )
}