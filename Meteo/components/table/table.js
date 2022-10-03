import React, { Component } from 'react';
import { View, Platform, TextInput, StyleSheet, Text, Image } from 'react-native';
import TableRow from './table_row';

export default class Table extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <TableRow/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        marginLeft:'2.5%',
        marginTop: 15,
        display: 'flex',
        flexDirection: 'column'
    },
});