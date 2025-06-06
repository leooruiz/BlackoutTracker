import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function GerenciarEventosScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerenciar Eventos</Text>

      <Button
        title="⏱ Atualizar Tempo de Interrupção"
        onPress={() => navigation.navigate("Tempo")}
      />

      <View style={styles.spacer} />

      <Button
        title="📉 Relatar Prejuízos"
        onPress={() => navigation.navigate("Prejuizos")}
      />

      <View style={styles.spacer} />

      <Button
        title="📋 Ver Recomendações"
        onPress={() => navigation.navigate("Recomendacoes")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 30, justifyContent: "center" },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  spacer: { height: 20 },
});
