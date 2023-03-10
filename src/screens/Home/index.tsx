import { useState } from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert
} from 'react-native'
import { Participant } from '../../components/Participant'

import { styles } from './styles'

import Logo from '../../assets/imherelogo.svg'

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  function handleParticipantAdd() {
    if (participantName.trim() === '') {
      return Alert.alert('Participante', 'Informe o nome do participante.')
    }

    if (participants.includes(participantName)) {
      return Alert.alert(
        'Participante Existe',
        'Já existe um participante na lista com este nome.'
      )
    }

    setParticipants(prevState => [...prevState, participantName])
    setParticipantName('')
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () =>
          setParticipants(prevState =>
            prevState.filter(participant => participant !== name)
          )
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo width={138} height={32} />
      </View>

      <Text style={styles.eventName}>Nome do Evento</Text>

      <Text style={styles.eventDate}>Domingo, 29 de Janeiro 2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
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
            onRemove={() => handleParticipantRemove(item)}
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
