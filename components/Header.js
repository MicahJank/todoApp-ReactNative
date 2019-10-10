import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';

const Header = ({ title }) => {

    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#171717',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Header;

