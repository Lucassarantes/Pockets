import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import logo from '../../../assets/pockets_logo.png';

const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logo}/>
            </View>
        </View>
    );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 5,
        backgroundColor: '#fff',
    },
    logoContainer: {
        flex:1,
        alignItems: 'center'
    },
    logo: {
        width: windowWidth * 0.4,
        height: 45,
        resizeMode: 'contain'
    }
});

export default Header;