import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Evento } from "../types/Evento";
import { listarEventos, salvarEvento } from "../services/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@eventos";

export default function TempoScreen() {
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [tempo, setTempo] = useState("");
  const [selecionado, setSelecionado] = useState<string | null>(null);

  useEffect(() => {
    listarEventos().then(setEventos);
  }, []);

  const atualizarTempo = async () => {
    try {
      if (!tempo || !selecionado)
        throw new Error("Selecione um evento e insira o tempo.");

      const novosEventos = eventos.map((ev) =>
        ev.id === selecionado ? { ...ev, tempoInterrupcao: tempo } : ev
      );

      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(novosEventos));
      Alert.alert("Atualizado", "Tempo salvo com sucesso!");
      setTempo("");
      setSelecionado(null);
      setEventos(novosEventos);
    } catch (err: any) {
      Alert.alert("Erro", err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atualizar Tempo de Interrupção</Text>

      <FlatList
        data={eventos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.item, item.id === selecionado && styles.selected]}
            onPress={() => setSelecionado(item.id)}
          >
            <Text style={styles.label}>
              {item.bairro}, {item.cidade}
            </Text>
            <Text>Tempo: {item.tempoInterrupcao || "-"}</Text>
          </TouchableOpacity>
        )}
      />

      <TextInput
        placeholder="Ex: 2h 30min"
        value={tempo}
        onChangeText={setTempo}
        style={styles.input}
      />

      <Button title="Salvar Tempo" onPress={atualizarTempo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 15,
  },
  item: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 8,
  },
  selected: {
    backgroundColor: "#d0ebff",
    borderColor: "#339af0",
  },
  label: { fontWeight: "bold" },
});
