import React, { Component } from 'react';
import { View, Platform, TextInput, StyleSheet, Text, Image } from 'react-native';
import TableRow from './table_row';

export default class Table extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.forecast[0] != null) {
            let row1 = Array();
            row1.push({ title: "Feels like", value: this.props.forecast[0].perceived_temperature, measure_unit: "°", align_measure_unit_top: true });
            row1.push({ title: "Humidity", value: this.props.forecast[0].humidity, measure_unit: "%", align_measure_unit_top: true });
            let row2 = Array();
            row2.push({ title: "Wind", value: this.props.forecast[0].wind.speed, measure_unit: "km/h", align_measure_unit_top: false });
            row2.push({ title: "Rainfall", value: this.props.forecast[0].rainfall, measure_unit: "mm", align_measure_unit_top: false });
            let row3 = Array();
            row3.push({ title: "Sunrise", value: this.props.placeinfo.sunrise, measure_unit: "", align_measure_unit_top: false })
            row3.push({ title: "Sunset", value: this.props.placeinfo.sunset, measure_unit: "", align_measure_unit_top: false })
            return (
                <View style={styles.container}>
                    <TableRow info={row1} />
                    <TableRow info={row2} />
                    <TableRow info={row3} />
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        marginLeft: '2.5%',
        display: 'flex',
        flexDirection: 'column'
    },
});