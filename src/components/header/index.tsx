import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { IconPlus } from '@tabler/icons-react-native'
import { s } from './styles'
import { colors } from '@/styles/theme'
import { useRouter } from 'expo-router'

export function Header() {
  const router = useRouter()

  return (
    <>
      <View style={s.container}>
        <Text style={s.title}>Check!</Text>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.push('/create')}
        >
          <IconPlus size={36} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </>
  )
}
