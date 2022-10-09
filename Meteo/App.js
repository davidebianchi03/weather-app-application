import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import WeatherNow from './components/weather_now'
import Today from './components/today';
import Week from './components/week';
import Table from './components/table/table';

export default function App() {

  var api_base_url = "https://meteoappapi.herokuapp.com";
  var place_canonical = "lambrugo";
  var place_name = "lambrugo";

  const [temperature, setTemperature] = useState(0);
  const [conditions, setConditions] = useState('');
  const [placeName, setPlaceName] = useState('');
  const [updateTime, setUpdateTime] = useState('');
  const [forecastToday, setForecastToday] = useState('');
  const [weekForecast, setWeekForecast] = useState('');
  const [sunsetSunriseTime, setSunsetSunrisTime] = useState({
    sunrise: '00:00',
    sunset: '00:00'
  });

  const zeroPad = (num, places) => String(num).padStart(places, '0')

  useEffect(() => {
    // get list forecast for today
    fetch(api_base_url + "/dayforecast?canonical=" + place_canonical + "&index=" + 0)
      .then(response => response.json())
      .then(data => {
        let forecast = data.weather_forecast;
        // weather now component informations
        setTemperature(forecast[0].temperature);
        setConditions(forecast[0].weather_condition_description);
        setPlaceName("lambrugo");//-->to change
        let date = new Date();
        setUpdateTime(date.getHours() + ":" + date.getMinutes());

        //forecast list for today
        if (forecast.length < 24) {
          fetch(api_base_url + "/dayforecast?canonical=" + place_canonical + "&index=" + 1)
            .then(response => response.json())
            .then(data => {
              let moreForecastArray = new Array();
              for (let i = 0; i < 24 - forecast.length; i++) {
                moreForecastArray.push(data.weather_forecast[i]);
              }
              setForecastToday(forecast.concat(moreForecastArray));
            });
        }
        else {
          setForecastToday(forecast);
        }
      });

    // update week
    fetch(api_base_url + "/weekforecast?canonical=" + place_canonical)
      .then(response => response.json())
      .then(data => {
        setWeekForecast(data.forecast);
      });

    // get informations about place
    fetch(api_base_url + "/searchplace?place=" + place_canonical)
      .then(response => response.json())
      .then(data => { 
        let sunrise_time = new Date(data.result[0].sunrise);
        let sunset_time = new Date(data.result[0].sunset);

        setSunsetSunrisTime({
          sunrise: zeroPad(sunrise_time.getHours(), 2) + ":" + zeroPad(sunrise_time.getMinutes(), 2),
          sunset: zeroPad(sunset_time.getHours(), 2) + ":" + zeroPad(sunset_time.getMinutes(), 2),
        })
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
            place_name={placeName}
            time={updateTime}
            temperature={temperature}
            conditions={conditions}
          />
          <Today
            forecastList={forecastToday}
          />
          <Week
            forecastList={weekForecast}
          />
          <StatusBar style="auto" />

          <Table
            forecast={forecastToday}
            placeinfo={sunsetSunriseTime}
          />
          <Text></Text>
        </ScrollView>
        {/* <View  style = {{height: 50}}></View> */}
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
