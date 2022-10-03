import React, { Component } from 'react';
import { View, Platform, TextInput, StyleSheet, Text, Image } from 'react-native';

export default class TableCell extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.title}</Text>
                <View style={styles.value_container}>
                    <Text style={styles.value}>{this.props.value}</Text>
                    <Text style={styles.measure_unit}>{this.props.measure_unit}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '45%',
        height: '100%',
        marginTop: 5,
        backgroundColor: 'rgba(255,255,255,0.5)',
        margin: '2.5%',
        borderRadius: 25,
    },
    title: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.6)',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 15
    },
    value_container: {
        display: 'flex',
        flexDirection: 'row'
    },
    value: {
        color: 'white',
        fontSize: 30,
        marginTop: 10,
        marginLeft: 15
    },
    measure_unit: {
        color: 'white',
        fontSize: 16,
        marginTop:15
    }
});