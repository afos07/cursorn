import React from 'react';
import {
  SafeAreaView, 
  View, 
  Text,
  StyleSheet
} from 'react-native';

import Props from './components/Props';
import CalculadoraGorgeta from './components/CalculadoraGorgeta';
const App = ()=>{
  return(
    <SafeAreaView style={styles.app}>
      {/* <Props frase="Props e States"/> */}
      <CalculadoraGorgeta/>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  app:{
      flex:1,
      backgroundColor:'white',
  }
})
export default App;