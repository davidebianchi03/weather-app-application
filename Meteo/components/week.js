import React, { Component } from 'react';
import { View, Platform, TextInput, StyleSheet, Text, Image } from 'react-native';
import WeekDay from './week_day';

export default class Week extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forecastList: Array(),
        }
    }

    render() {
        this.state.forecastList = new Array()
        let length = 7;
        if(this.props.forecastList < 7)
            length = this.props.forecastList;
        for (let i = 0; i < length; i++) {
            this.state.forecastList.push(
                <WeekDay
                    day={this.props.forecastList[i].day}
                    icon={this.props.forecastList[i].icon}
                    min_temp={this.props.forecastList[i].min_temperature}
                    max_temp={this.props.forecastList[i].max_temperature}
                    key={this.props.forecastList[i].day}
                />
            )
        }

        return (
            <View style={styles.container}>
                {this.state.forecastList}
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