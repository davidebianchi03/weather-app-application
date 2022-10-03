import React, { Component } from 'react';
import { View, Platform, TextInput, StyleSheet, Text, Image } from 'react-native';

export default class TimeSlot extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.hour}>{this.props.time}</Text>
                <Image
                    source={{uri: this.props.image }}
                    style={styles.weather_conditions_icon}
                />
                <Text style={styles.temperature}>{this.props.temperature}°</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 60,
        height: 90,
        display: 'flex',
        flexDirection: 'column',
        marginTop: 25,
    },
    hour: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: 'white'
    },
    weather_conditions_icon: {
        width: 40,
        height: 40
    },
    min_max_container:{
        display: 'flex',
        flexDirection:'column-reverse',
    },
    temperature: {
        color: 'white'
    },
});