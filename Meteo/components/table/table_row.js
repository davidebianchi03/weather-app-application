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
                <TableCell
                    title={this.props.info[0].title}
                    value={this.props.info[0].value}
                    measure_unit={this.props.info[0].measure_unit}
                    align_measure_unit_top = {this.props.info[0].align_measure_unit_top}
                />

                <TableCell
                    title={this.props.info[1].title}
                    value={this.props.info[1].value}
                    measure_unit={this.props.info[1].measure_unit}
                    align_measure_unit_top = {this.props.info[1].align_measure_unit_top}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 150,
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
    },
});