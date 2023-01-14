import { Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { Participant } from '../../components/Participant'

import { styles } from './styles'

export function Home() {
  const participants = [
    'Vagner',
    'Vivian',
    'Jaqueline',
    'Eduardo',
    'Matheus',
    'Leonardo',
    'Marcos',
    'Fabricio',
    'Geovana',
    'Valdeci',
    'Zélia'
  ]

  function handleParticipantAdd() {
    console.log('Você clicou no botão de Adicionar.')
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clicou em remover o participante ${name}.`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove('Vagner Nerves')}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  )
}
