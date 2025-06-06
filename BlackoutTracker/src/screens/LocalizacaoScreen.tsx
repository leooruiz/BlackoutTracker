import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Evento } from "../types/Evento";
import { salvarEvento } from "../services/storage";
import { v4 as uuidv4 } from "uuid";

export default function LocalizacaoScreen() {
  const navigation = useNavigation();

  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [cep, setCep] = useState("");

  const handleSalvar = async () => {
    try {
      if (!bairro || !cidade) {
        throw new Error("Preencha pelo menos bairro e cidade");
      }

      const novoEvento: Evento = {
        id: Date.now().toString(),
        bairro,
        cidade,
        tempoInterrupcao: "",
        prejuizos: "",
        data: new Date().toLocaleDateString("pt-BR"),
      };

      await salvarEvento(novoEvento);

      Alert.alert("Sucesso", "Evento salvo com sucesso!");
      navigation.goBack();
    } catch (error: any) {
      Alert.alert("Erro", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Bairro:</Text>
      <TextInput style={styles.input} value={bairro} onChangeText={setBairro} />

      <Text style={styles.label}>Cidade:</Text>
      <TextInput style={styles.input} value={cidade} onChangeText={setCidade} />

      <Text style={styles.label}>CEP (opcional):</Text>
      <TextInput
        style={styles.input}
        value={cep}
        onChangeText={setCep}
        keyboardType="numeric"
      />

      <Button title="Salvar Localização" onPress={handleSalvar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontWeight: "bold", marginTop: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
  },
});
