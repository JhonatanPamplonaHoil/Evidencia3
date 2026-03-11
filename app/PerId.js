import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function PerId() {
  const params = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalle del Perfil</Text>
      
      {/* Aquí mostramos el nombre que recibimos de la tarjeta */}
      <Text style={styles.text}>Estás viendo a la persona: {params.nombre}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: '#333',
  }
});