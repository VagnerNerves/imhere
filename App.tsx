import { Text, View } from 'react-native'

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#131016',
        padding: 24
      }}
    >
      <Text
        style={{
          color: '#fff',
          fontSize: 24,
          fontWeight: 'bold',
          marginTop: 48
        }}
      >
        Nome do Evento
      </Text>
      <Text
        style={{
          color: '#6b6b6b',
          fontSize: 16
        }}
      >
        Sexta, 4 de Novembro 2022
      </Text>
    </View>
  )
}