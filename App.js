import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import ProfileCard from './components/ProfileCard';

export default function App() {

  
  const contactosData = [
    {
      id: 1,
      nombre: 'Laura Martínez',
      descripcion: 'Diseñadora UX/UI. Amante del café y los gatos.',
      // Usamos require() para imágenes locales
      imagen: require('./assets/perfil1.jpg'),
    },
    {
      id: 2,
      nombre: 'Carlos López',
      descripcion: 'Desarrollador Full Stack. Entusiasta de React Native.',
      imagen: require('./assets/perfil2.jpg'),
    },
    {
      id: 3,
      nombre: 'Ana Sofía Ruiz',
      descripcion: 'Project Manager y fotógrafa aficionada.',
      imagen: require('./assets/perfil3.jpg'),
    },
  ];

  return (
    // Usamos SafeAreaView para que no se solape con la barra de estado en algunos móviles
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Usamos ScrollView para poder hacer scroll si hay muchas tarjetas */}
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {/* Recorremos el array de datos y creamos una ProfileCard por cada uno */}
          {contactosData.map((contacto) => (
            <ProfileCard
              key={contacto.id} // Es importante dar una 'key' única al iterar
              nombre={contacto.nombre}
              descripcion={contacto.descripcion}
              imagen={contacto.imagen}
            />
          ))}
        </ScrollView>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

// Requisito 4: Estilizar la aplicación principal
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f2f5', // Un color de fondo gris claro para la app
  },
  container: {
    flex: 1,
  },
  scrollViewContent: {
    paddingVertical: 20, // Un poco de espacio arriba y abajo en la lista
  },
});