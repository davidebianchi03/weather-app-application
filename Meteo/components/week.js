import React, { Component } from 'react';
import { View, Platform, TextInput, StyleSheet, Text, Image } from 'react-native';
import WeekDay from './week_day';

export default class Week extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <WeekDay />
                <WeekDay />
                <WeekDay />
                <WeekDay />
                <WeekDay />
                <WeekDay />
                <WeekDay />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        marginLeft: '5%',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 25,
        borderRadius: 25,
        padding: 10,
    },
    scroll: {
        width: '100%',
    }
});