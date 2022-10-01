import React, { Component } from 'react';
import { View, Platform, TextInput, StyleSheet, Text, ScrollView, Image } from 'react-native';
import TimeSlot from './time_slot';

export default class Today extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={styles.scroll_view}>
                   <TimeSlot
                   time = "19:00"
                   image = "https://www.3bmeteo.com/images/set_icone/8/40-40/47.png"
                   temperature = {22}
                   />
                   <TimeSlot
                   time = "19:00"
                   image = "https://www.3bmeteo.com/images/set_icone/8/40-40/47.png"
                   temperature = {22}
                   />
                   <TimeSlot
                   time = "19:00"
                   image = "https://www.3bmeteo.com/images/set_icone/8/40-40/47.png"
                   temperature = {22}
                   />
                   <TimeSlot
                   time = "19:00"
                   image = "https://www.3bmeteo.com/images/set_icone/8/40-40/47.png"
                   temperature = {22}
                   />
                   <TimeSlot
                   time = "19:00"
                   image = "https://www.3bmeteo.com/images/set_icone/8/40-40/47.png"
                   temperature = {22}
                   />
                   <TimeSlot
                   time = "19:00"
                   image = "https://www.3bmeteo.com/images/set_icone/8/40-40/47.png"
                   temperature = {22}
                   />
                   <TimeSlot
                   time = "19:00"
                   image = "https://www.3bmeteo.com/images/set_icone/8/40-40/47.png"
                   temperature = {22}
                   />
                   <TimeSlot
                   time = "19:00"
                   image = "https://www.3bmeteo.com/images/set_icone/8/40-40/47.png"
                   temperature = {22}
                   />
                   <TimeSlot
                   time = "19:00"
                   image = "https://www.3bmeteo.com/images/set_icone/8/40-40/47.png"
                   temperature = {22}
                   />
                  
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