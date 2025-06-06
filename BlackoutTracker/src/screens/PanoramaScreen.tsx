import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { listarEventos } from "../services/storage";
import { Evento } from "../types/Evento";
import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function PanoramaScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [eventos, setEventos] = useState<Evento[]>([]);

  useFocusEffect(
    useCallback(() => {
      listarEventos().then(setEventos);
    }, [])
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Gerenciar"
          onPress={() => navigation.navigate("Gerenciar")}
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>Panorama Geral</Text>

        {eventos.length === 0 ? (
          <Text style={styles.empty}>Nenhum evento registrado ainda.</Text>
        ) : (
          <FlatList
            data={eventos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={styles.cardTitle}>
                  {item.bairro}, {item.cidade}
                </Text>
                <Text>Tempo sem energia: {item.tempoInterrupcao || "-"}</Text>
                <Text>Data: {item.data}</Text>
              </View>
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        )}
      </View>

      <View style={styles.footer}>
        <Button
          title="Registrar novo evento"
          onPress={() => navigation.navigate("Localizacao")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  empty: { textAlign: "center", marginTop: 40, color: "#666" },
  card: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
  },
  footer: {
    paddingTop: 10,
    paddingBottom: 20,
    alignItems: "center",
  },
  separator: {
    height: 2,
    backgroundColor: "#ccc",
    marginVertical: 5,
  },
});
