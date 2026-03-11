import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import ProfileCard from '../components/ProfileCard';

export default function App() {

  const contactosData = [
    {
      id: 1, 
      nombre: 'Laura Martínez',
      descripcion: 'Diseñadora UX/UI. Amante del café y los gatos.',
      imagen: require('../assets/perfil1.jpg'),
    },
    {
      id: 2,
      nombre: 'Carlos López',
      descripcion: 'Desarrollador Full Stack. Entusiasta de React Native.',
      imagen: require('../assets/perfil2.jpg'),
    },
    {
      id: 3,
      nombre: 'Ana Sofía Ruiz',
      descripcion: 'Project Manager y fotógrafa aficionada.',
      imagen: require('../assets/perfil3.jpg'),
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {contactosData.map((contacto) => (
            <ProfileCard
              key={contacto.id}
              id={contacto.id} 
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

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  container: {
    flex: 1,
  },
  scrollViewContent: {
    paddingVertical: 20,
  },
});