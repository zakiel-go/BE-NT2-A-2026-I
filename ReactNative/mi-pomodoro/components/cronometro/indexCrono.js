import { View, Text } from 'react-native';
import { useIniciado } from "../../hooks/useIniciado";
import { useEffect, useState, useRef } from 'react';
import { vibrate } from '../../utils';
import { constants } from './constants';
import styles from './styles';

const Cronometro = () => {
    const { isRunning, toggleRunning, reset, isWorkTime, toggleWorkTime } = useIniciado();
    const [time, setTime] = useState(constants.WORK_TIME);
    const interval = useRef(null);
    
    const handleReset = () => {
        setTime(isWorkTime ? constants.WORK_TIME : constants.BREAK_TIME);
    }
    
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    useEffect(() => {
        if(isRunning){
            interval.current = setInterval(() => {
                setTime((prev) => (prev > 0 ? prev - 1 : 0));
            }, 1000)
        } else {
            clearInterval(interval.current);
        }

    }, [isRunning]);

    useEffect(() => {
        if (time === 0) {
            vibrate();
            toggleWorkTime();
        }
    }, [time]);

    useEffect(() => {
        handleReset();
    }, [reset])


    return (
        <View style={styles.container}>
            <Text style={styles.timerText}>{formatTime(time)}</Text>
        </View>
    );  
};


export default Cronometro;