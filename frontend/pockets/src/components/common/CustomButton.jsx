import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ onPress, text, style, textStyle }) => {
    const btnStyle = style ? [style] : styles.button;
    const btnTextStyle = textStyle ? [textStyle] : styles.buttonText;

    return (
        <TouchableOpacity onPress={onPress} style={[btnStyle]}>
            <Text style={[btnTextStyle]}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'rgba(255, 221, 51, 1)',
        padding: 5,
        marginRight: 5,
        borderRadius: 2,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(103,30,117, 1)',
        borderRightWidth: 1,
        borderRightColor: 'rgba(103,30,117, 1)',
    },
    buttonText: {
        color: 'rgba(103,30,117, 1)',
        textAlign: 'center',
    },
})

export default CustomButton;