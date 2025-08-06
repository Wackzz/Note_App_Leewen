import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';



function test() {
  console.log("test");
}

export default function Index() {
  return (
    <><View style={styles.title}>
      <Text style={styles.text}>Home screen</Text>
    </View><Button title="appuyez ici" onPress={test} /></>
    
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  },
  button : {
    color: '#fff',
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  }
});

