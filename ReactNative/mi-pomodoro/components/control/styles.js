import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
        flexDirection: 'row', // Para ponerlos uno al lado del otro
        gap: 10,              // Espacio entre botones
        justifyContent: 'center',
        marginTop: 20,
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 25,
        backgroundColor: '#007BFF',
        borderRadius: 10,
        elevation: 3, // Sombra en Android
        shadowColor: '#000', // Sombra en iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    }
});

export default styles;