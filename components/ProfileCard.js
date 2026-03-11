import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileCard({ id, nombre, descripcion, imagen }) {
  const [siguiendo, setSiguiendo] = useState(false);
  const router = useRouter();

  const manejarPresionBoton = () => {
    setSiguiendo(!siguiendo);
  };

  return (
    <View style={styles.cardContainer}>
      <Image source={imagen} style={styles.image} />

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{nombre}</Text>
        <Text style={styles.description}>{descripcion}</Text>

        <View style={styles.botonesContainer}>
          <TouchableOpacity
            style={[styles.button, siguiendo ? styles.buttonSiguiendo : styles.buttonSeguir]}
            onPress={manejarPresionBoton}
          >
            <Text style={styles.buttonText}>
              {siguiendo ? "Siguiendo" : "Seguir"}
            </Text>
          </TouchableOpacity>

          {/* Botón que navega a PerId y envía el ID y el NOMBRE */}
          <TouchableOpacity
            style={[styles.button, styles.buttonVerPerfil]}
            onPress={() => router.push({ pathname: '/PerId', params: { id: id, nombre: nombre } })}
          >
            <Text style={styles.buttonTextVerPerfil}>Ver perfil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  botonesContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 5,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSeguir: {
    backgroundColor: '#007BFF',
  },
  buttonSiguiendo: {
    backgroundColor: '#6c757d',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  buttonVerPerfil: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007BFF',
  },
  buttonTextVerPerfil: {
    color: '#007BFF',
    fontWeight: '600',
    fontSize: 14,
  }
});