import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Linking, TouchableOpacity } from "react-native";

const recomendacoes = [
  "✅ Tenha lanternas e pilhas acessíveis.",
  "✅ Mantenha seu celular carregado sempre que possível.",
  "✅ Evite abrir geladeira/freezer durante o apagão.",
  "✅ Desconecte aparelhos eletrônicos para evitar queimas.",
  "✅ Tenha um plano de evacuação em caso de alagamento.",
  "✅ Comunique vizinhos e familiares sobre o ocorrido.",
  "✅ Use rádios a pilha para acompanhar informações oficiais.",
  "✅ Mantenha medicamentos refrigerados sob controle.",
  "✅ Evite o uso de velas sem supervisão.",
  "✅ Anote a duração e o impacto do apagão para futuros registros.",
];

export default function RecomendacoesScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Recomendações em caso de falha de energia
      </Text>
      {recomendacoes.map((rec, idx) => (
        <Text key={idx} style={styles.item}>
          {rec}
        </Text>
      ))}
      <TouchableOpacity
        onPress={() =>
          Linking.openURL(
            "https://www.spsemprealerta.sp.gov.br/orientacoes/queda-de-energia/"
          )
        }
      >
        <Text style={styles.link}>
          🔗 Acesse orientações oficiais sobre quedas de energia
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  item: {
    fontSize: 16,
    marginBottom: 12,
    lineHeight: 22,
  },
  link: {
    marginTop: 30,
    fontSize: 16,
    color: "#1e90ff",
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
