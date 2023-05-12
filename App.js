import {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: "Rafeek Mohamed", key: "1" },
    { name: "Mohamed Riswan", key: "2" },
    { name: "Mohamed Raslan", key: "3" },
    { name: "Hussain Risvi", key: "4" },
    { name: "Mohamed Rizan", key: "5" },
    { name: "Mohamed Rifkan", key: "6" },
    { name: "Mohamed Afker", key: "7" },
  ])
  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map(person => (
          <View key={person.key}>
            <Text style={styles.item}>{person.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
  }
});
