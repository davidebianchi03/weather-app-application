import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import WeatherNow from './components/weather_now'
import Today from './components/today';
import Week from './components/week';

export default function App() {

  var api_base_url = "https://meteoappapi.herokuapp.com";
  var place_canonical = "lambrugo";

  const [temperature, setTemperature] = useState(0);
  const [conditions, setConditions] = useState('');
  const [placeName, setPlaceName] = useState('')

  useEffect(() => {
    // get list forecast for today
    fetch(api_base_url + "/dayforecast?canonical=" + place_canonical + "&index=" + 0)
      .then(response => response.json())
      .then(data => {
        let forecast = data.weather_forecast;
        setTemperature(forecast[0].temperature);
        setConditions(forecast[0].weather_condition_description);
        setPlaceName("lambrugo");//-->to change
      });

  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgb(0, 187, 255)', 'rgb(24, 98, 217)']}
        style={styles.background}
      >
        <ScrollView>
          <WeatherNow
            place_name="Lambrugo"
            time="12:45"
            temperature={temperature}
            conditions={conditions}
          />
          <Today />
          <Week />
          <StatusBar style="auto" />
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    width: '100%',
    height: '100%'
  },
});
