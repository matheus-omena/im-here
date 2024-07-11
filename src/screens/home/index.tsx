import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/participant';
import { useState } from 'react';

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState<string>('');

  function handleParticipantAdd() {
    if (participantName === '') {
      return Alert.alert('Operação não permitida', 'É necessário inserir um nome')
    }

    if (participants.includes(participantName)) {
      return Alert.alert('Participante existe', 'Já existe um participante na lista com esse nome')
    } else {
      setParticipants(state => [...state, participantName]);
      setParticipantName('')      
    }    
  }

  function handleParticipantRemove(name: string) {    
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {
          setParticipants(prevState => prevState.filter(participant => participant !== name));
        }
      },
      {
        text: 'Não',
        style: 'destructive'
      }
    ])    
  }

  return (
    <View style={styles.container}>      
      <Text style={styles.text}>Lista de presença</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}          
          placeholder='Nome do participante'
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
        />   

        <TouchableOpacity
          style={styles.button}
          onPress={handleParticipantAdd}          
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>   
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => <Participant key={item} name={item} onRemove={handleParticipantRemove} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={          
            <View style={styles.emptyListContainer}>
              <Text style={styles.emptyListText}>Nenhum participante adicionado.</Text>
            </View>
        }
      />      
    </View>
  );
}