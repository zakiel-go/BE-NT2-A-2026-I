import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { vibrate } from './utils';
import { IniciadoProvider } from './hooks/useIniciado';
import Cronometro from './components/cronometro/indexCrono';
import Control from './components/control/indexControl';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CRONOMETRO POMODORO</Text>
      <StatusBar style="auto" />
      {/* <Button title="Press me" onPress={() => vibrate()} /> */}
      <IniciadoProvider>
        <Cronometro />
        <Control />
      </IniciadoProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  }
});
