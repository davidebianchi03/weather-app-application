import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { WeatherNow } from './components/weather_now'

export default function App() {
  return (
    <View style={styles.container}>
       <LinearGradient
        // Background Linear Gradient
        colors={['rgb(0, 187, 255)', 'rgb(24, 98, 217)']}
        style={styles.background}
      >
      <WeatherNow/>
      <StatusBar style="auto" />
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
  background:{
    width: '100%',
    height: '100%'
  },
});
