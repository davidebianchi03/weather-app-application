import React, { Component } from 'react';
import { View, Platform, TextInput, StyleSheet, Text, Image } from 'react-native';

export default class TableCell extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let measure_unit;
        if(this.props.align_measure_unit_top == true){
            measure_unit = <Text style={styles.measure_unit_top}>{this.props.measure_unit}</Text>
        }else{
            measure_unit =  <Text style={styles.measure_unit_bottom}>{this.props.measure_unit}</Text>
        }
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.title}</Text>
                <View style={styles.value_container}>
                    <Text style={styles.value}>{this.props.value}</Text>
                    {measure_unit}
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
    measure_unit_top: {
        color: 'white',
        fontSize: 16,
        marginTop:15
    },
    measure_unit_bottom:{
        color: 'white',
        fontSize: 16,
        marginTop:24,
        marginLeft:3
    },
});