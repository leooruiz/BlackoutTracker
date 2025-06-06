import React, { useEffect, useState } from 'react';
import {
  View, Text, TextInput, Button, FlatList,
  StyleSheet, Alert, TouchableOpacity
} from 'react-native';
import { listarEventos } from '../services/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Evento } from '../types/Evento';

const STORAGE_KEY = '@eventos';

export default function PrejuizosScreen() {
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [prejuizos, setPrejuizos] = useState('');
  const [selecionado, setSelecionado] = useState<string | null>(null);

  useEffect(() => {
    listarEventos().then(setEventos);
  }, []);

  const salvarPrejuizo = async () => {
    try {
      if (!prejuizos || !selecionado) {
        throw new Error('Selecione um evento e preencha os prejuízos.');
      }

      const novosEventos = eventos.map(ev =>
        ev.id === selecionado ? { ...ev, prejuizos } : ev
      );

      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(novosEventos));
      Alert.alert('Sucesso', 'Prejuízos registrados.');
      setPrejuizos('');
      setSelecionado(null);
      setEventos(novosEventos);
    } catch (error: any) {
      Alert.alert('Erro', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Prejuízos</Text>

      <FlatList
        data={eventos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.item, item.id === selecionado && styles.selected]}
            onPress={() => setSelecionado(item.id)}
          >
            <Text style={styles.label}>{item.bairro}, {item.cidade}</Text>
            <Text>Prejuízo: {item.prejuizos || '-'}</Text>
          </TouchableOpacity>
        )}
      />

      <TextInput
        placeholder="Ex: Alimentos perdidos, loja sem vendas..."
        value={prejuizos}
        onChangeText={setPrejuizos}
        style={styles.input}
        multiline
        numberOfLines={3}
      />

      <Button title="Salvar Prejuízos" onPress={salvarPrejuizo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  input: {
    borderWidth: 1, borderColor: '#aaa', padding: 10,
    borderRadius: 5, marginTop: 10, marginBottom: 15,
    textAlignVertical: 'top'
  },
  item: {
    padding: 10, borderWidth: 1, borderColor: '#ccc',
    borderRadius: 5, marginBottom: 8,
  },
  selected: {
    backgroundColor: '#ffe3e3',
    borderColor: '#f03e3e',
  },
  label: { fontWeight: 'bold' }
});