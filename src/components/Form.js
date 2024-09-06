import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Form = () => {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    alert(`Name: ${name}`);
  };

  return (
    <View style={styles.form}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    backgroundColor: 'purple',
    padding: 20,
    borderRadius: 5,
  },
  label: {
    fontFamily: 'Open Sans',
    marginBottom: 8,
  },
  input: {
    fontFamily: 'Open Sans',
    padding: 10,
    marginBottom: 8,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  button: {
    fontFamily: 'Open Sans',
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: 10,
    textAlign: 'center',
    fontSize: 16,
    borderRadius: 4,
  },
});

export default Form;
