import { useIniciado } from "../../hooks/useIniciado";
import { Button, Text, Touchable, TouchableOpacity, View } from 'react-native';
import styles from './styles';


const Control = () => {
    const { isRunning, toggleRunning, toggleReset } = useIniciado();

    const handleReset = () => {
        if (isRunning) {
            toggleRunning();
        }
        toggleReset();
    }
    return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} title={isRunning ? 'Pausar' : 'Iniciar'} onPress={toggleRunning}>
            <Text style={styles.buttonText}>{isRunning ? 'Pausar' : 'Iniciar'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} title="Reiniciar" onPress={handleReset}>
            <Text style={styles.buttonText}>Reiniciar</Text>
        </TouchableOpacity>
    </View>
    )
}


export default Control;