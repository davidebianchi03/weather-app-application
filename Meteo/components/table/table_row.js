import React, { Component } from 'react';
import { View, Platform, TextInput, StyleSheet, Text, Image } from 'react-native';
import TableCell from './table_cell';

export default class TableRow extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <TableCell title = "Feels like" value = "25" measure_unit = "°"/>
                <TableCell title = "Humidity" value = "50"  measure_unit = "%"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 150,
        marginTop: 5,
        display: 'flex',
        flexDirection: 'row',
    },
});