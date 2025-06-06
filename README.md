# BlackoutTracker 📱⚡

Aplicativo mobile desenvolvido como parte do projeto Global Solution da FIAP – Engenharia de Software, voltado à **registrar e visualizar localmente eventos de falta de energia** causados por desastres naturais (chuvas intensas, ventos, deslizamentos).

---

## 🚀 Objetivo

Capacitar o usuário a documentar e entender os impactos de falhas de energia elétrica em sua região, promovendo **autonomia informacional, prevenção de prejuízos e respostas mais eficientes** por parte da comunidade.

---

## 📲 Funcionalidades

- 📋 **Panorama Geral:** lista de todos os eventos registrados (local, data, tempo, prejuízos).
- 🏘 **Localização Atingida:** cadastro da região afetada (bairro, cidade, CEP).
- ⏱ **Tempo de Interrupção:** registro da duração da falha elétrica.
- 📉 **Prejuízos Causados:** campo livre para descrever impactos.
- 📋 **Recomendações:** dicas úteis + link oficial para ações preventivas.

---

## 💾 Armazenamento

Todos os dados são armazenados **localmente** via [`AsyncStorage`](https://react-native-async-storage.github.io/async-storage/), garantindo acesso offline.

---

## 🛠️ Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- `@react-navigation/native`
- `@react-native-async-storage/async-storage`
- TypeScript

---

## 📁 Estrutura de Pastas

```
BlackoutTracker/
├── App.tsx
├── src/
│   ├── screens/
│   │   ├── PanoramaScreen.tsx
│   │   ├── LocalizacaoScreen.tsx
│   │   ├── TempoScreen.tsx
│   │   ├── PrejuizosScreen.tsx
│   │   ├── RecomendacoesScreen.tsx
│   │   └── GerenciarEventosScreen.tsx
│   ├── services/
│   │   └── storage.ts
│   ├── types/
│   │   └── Evento.ts
```

---

## ▶️ Como Executar

1. Instale dependências:
```bash
npm install
```

2. Execute com Expo:
```bash
npx expo start
```

3. Leia o QR code com o app **Expo Go** no celular.

---

## ✅ Requisitos Atendidos

- [x] Registro e visualização de eventos
- [x] Persistência local com AsyncStorage
- [x] 5 telas funcionais exigidas
- [x] Simulações de erro com `try-catch`
- [x] Código limpo, organizado, reutilizável
- [x] README explicativo

---

## 🔗 Fonte Oficial de Recomendações

📎 [https://www.spsemprealerta.sp.gov.br/orientacoes/queda-de-energia/](https://www.spsemprealerta.sp.gov.br/orientacoes/queda-de-energia/)

---

## 👨‍💻 Projeto desenvolvido por
**Leonardo de Oliveira Ruiz** - RM 98901

**Bruno Venturi Lopes Vieira** - RM 99431

FIAP 3º ano – Engenharia de Software