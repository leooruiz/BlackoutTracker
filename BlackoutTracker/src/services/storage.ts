import AsyncStorage from '@react-native-async-storage/async-storage';
import { Evento } from '../types/Evento';

const STORAGE_KEY = '@eventos';

export async function salvarEvento(evento: Evento) {
  const data = await AsyncStorage.getItem(STORAGE_KEY);
  const eventos: Evento[] = data ? JSON.parse(data) : [];
  eventos.push(evento);
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(eventos));
}

export async function listarEventos(): Promise<Evento[]> {
  const data = await AsyncStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export async function limparEventos() {
  await AsyncStorage.removeItem(STORAGE_KEY);
}