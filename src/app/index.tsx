import { View } from 'react-native'
import { useRouter } from 'expo-router'
import { Welcome } from '@/components/welcome'
import { Steps } from '@/components/steps'
import { Button } from '@/components/button'

export default function Index() {
  const router = useRouter()

  return (
    <View style={{ flex: 1, padding: 40, gap: 50 }}>
      <Welcome />

      <Steps />

      <Button title="Começar" onPress={() => router.push('/list')} />
    </View>
  )
}
