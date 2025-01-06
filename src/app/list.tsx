import React from "react"
import { Header } from "@/components/header"
import { Priorities } from "@/components/priorities"
import { View } from "react-native"


export default function List() {
  return (
    <View style={{ flex: 1 }}>
      <Header />

      <Priorities selected="Alta" onChange={(priority) => console.log(priority)} />

        
    </View>
  )
}