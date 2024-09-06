import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import ApiData from './src/components/ApiData';
import Form from './src/components/Form';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={require('./src/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Welcome to My React Native App</Text>
      </View>
      <View style={styles.content}>
        <ApiData />
        <Form />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    width: '100%',
  },
});

export default App;
