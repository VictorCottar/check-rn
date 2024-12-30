import { Stack } from 'expo-router'
import { Loading } from '@/components/loading'
import { colors } from '@/styles/theme'
import { StatusBar } from 'react-native'
import React from 'react'

import {
  useFonts,
  DMSans_700Bold,
  DMSans_500Medium,
  DMSans_400Regular,
} from '@expo-google-fonts/dm-sans'

export default function Layout() {
  const [fontsLoaded] = useFonts({
    DMSans_700Bold,
    DMSans_500Medium,
    DMSans_400Regular,
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} translucent />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background },
        }}
      />
    </>
  )
}
