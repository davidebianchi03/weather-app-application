import React, { Component } from 'react';
import { View, Platform, TextInput, StyleSheet, Text } from 'react-native';

export default class WeatherNow extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.place_name}>{this.props.place_name}</Text>
                <Text style={styles.time}>{this.props.time}</Text>
                <View style = {styles.temperature_container}>
                    <Text style={styles.temperature}>{this.props.temperature}</Text>
                    <Text style = {styles.temperature_unit}>°C</Text>
                </View>
                <Text style={styles.conditions}>{this.props.conditions}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        width: '100%',
        height: 150
    },
    place_name: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        textTransform: 'uppercase',
        width: '100%',
        fontWeight: 'bold'
    },
    time: {
        textAlign: 'center',
        width: '100%',
        color: '#fff',
    },
    temperature_container:{
        color: '#fff',
        display: 'flex',
        flexDirection: 'row'
    },
    temperature: {
        color: '#fff',
        fontSize: 80,
        textAlign: 'center',
    },
    temperature_unit:{
        color: '#fff',
        fontSize: 18,
        marginTop: 20,
    },
    conditions: {
        color: '#fff',
        fontSize: 18,
    }
});