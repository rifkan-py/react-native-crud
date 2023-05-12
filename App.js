import {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = useState("Rifkan")
  const [age, setAge] = useState(23)

  return (
    <View style={styles.container}>
      <Text>Enter name: </Text>
      <TextInput 
        style={styles.input} 
        placeholder='e.g Mohamed Rifkan' 
        onChangeText={(value) => setName(value)} 
        multiline
      />
      <Text>Enter age: </Text>
      <TextInput 
        style={styles.input} 
        placeholder='e.g 23' 
        onChangeText={(value) => setAge(value)} 
        keyboardType='number-pad'
      />
      <Text>name: {name} and age: {age}</Text>
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
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
  }
});
