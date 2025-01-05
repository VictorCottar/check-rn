import React from 'react'
import { router } from 'expo-router'
import { View, TouchableOpacity } from 'react-native'
import { IconArrowLeft } from '@tabler/icons-react-native'
import { colors } from '@/styles/theme'
import { InputNewTask } from '@/components/inputNewTask'


export default function Create() {
  return (
    <>
      <View style={{ marginTop: 40, marginLeft: 18 }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.push('/list')}
        >
          <IconArrowLeft size={36} color={colors.primary} />
        </TouchableOpacity>
      </View>

      <InputNewTask />
    </>
  )
}