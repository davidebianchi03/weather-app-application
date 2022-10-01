import React, { Component } from 'react';
import { View, Platform, TextInput, StyleSheet, Text, Image } from 'react-native';

export default class WeekDay extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.part_1}>
                    <Text style={styles.day}>Lun 03</Text>
                    <Image
                        source={{ uri: 'https://www.3bmeteo.com/images/set_icone/8/40-40/47.png' }}
                        style={styles.weather_icon}
                    />
                </View>
                <View style = {styles.part_2}>
                    <Text style={styles.min_temp}>11°</Text>
                    <Text style={styles.max_temp}>21°</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 50,
        marginTop: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'space-between',
    },
    part_1:{
        display: 'flex',
        flexDirection:'row',
        width: '50%',
        alignItems: 'center',
    },
    part_2:{
        width:'50%',
        textAlign:'left',
        position:'relative'
    },
    day: {
        color: 'white',
        fontWeight: 'bold',
        width: 60
    },
    weather_icon: {
        width: 40,
        height: 40,
        marginTop: 5,
    },
    min_temp: {
        color: '#0088ff',
        fontWeight: 'bold',
        width:'100%',
        textAlign:'right',
    },
    max_temp: {
        color: 'white',
        fontWeight: 'bold',
        width:'100%',
        textAlign:'right',
    }
});