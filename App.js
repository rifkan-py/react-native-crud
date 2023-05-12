import {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState("Rifkan")
  const [person, setPerson] = useState({name: "Rifkan", age: 23})

  const clickHandler = () => {
    setName("Mohamed")
    setPerson({name: "Mohamed", age: 32})
  }

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>My name is {person.name} and I am {person.age} old</Text>
      <View style={styles.buttonContainer}> 
        <Button title="Update state" onPress={clickHandler} />
      </View>
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
  buttonContainer: {
    marginTop: 20,
  }
});
