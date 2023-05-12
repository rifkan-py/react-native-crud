import {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: "Rafeek Mohamed", id: "1" },
    { name: "Mohamed Riswan", id: "2" },
    { name: "Mohamed Raslan", id: "3" },
    { name: "Hussain Risvi", id: "4" },
    { name: "Mohamed Rizan", id: "5" },
    { name: "Mohamed Rifkan", id: "6" },
    { name: "Mohamed Afker", id: "7" },
  ])
  return (
    <View style={styles.container}>
      <FlatList 
        //numColumns={2}
        data={people} 
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <Text style={styles.item}>{item.name}</Text>
        )} 
      />

      {/* <ScrollView>
        {people.map(person => (
          <View key={person.key}>
            <Text style={styles.item}>{person.name}</Text>
          </View>
        ))}
      </ScrollView> */}
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
    marginHorizontal: 10.,
    marginTop: 24,
  }
});
