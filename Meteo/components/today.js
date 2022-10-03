import React, { Component } from 'react';
import { View, Platform, TextInput, StyleSheet, Text, ScrollView, Image } from 'react-native';
import TimeSlot from './time_slot';

export default class Today extends Component {
    constructor(props) {
        super(props)
        this.state = {
            forecastList: Array(),
        }
    }

    render() {
        this.state.forecastList = new Array();
        let length = 24;
        if(this.props.forecastList.length < 24){
            length = this.props.forecastList.length;
        }
        for (let i = 0; i < length; i++) {
            this.state.forecastList.push(
                <TimeSlot
                    time= {this.props.forecastList[i].time_slot}
                    image={this.props.forecastList[i].weather_condition_icon_url}
                    temperature={this.props.forecastList[i].temperature}
                    key = {this.props.forecastList[i].time_slot}
                />
            )
        }


        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={styles.scroll_view}>
                    {this.state.forecastList}

                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        // alignItems: 'center',
        borderRadius: 25,
        // justifyContent: 'center',
        marginTop: 100,
        width: '90%',
        marginLeft: '5%',
        height: 150,
        display: 'flex',
        flexDirection: 'row',
    },
    scroll_view: {
        width: '100%',
        height: '100%',
        flex: 1
    },
});