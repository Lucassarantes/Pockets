import { StyleSheet, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import Header from './src/components/common/Header';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Header />
        <Home />
      </View>
    </NavigationContainer>
  );
}

// const { height, width }  = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
