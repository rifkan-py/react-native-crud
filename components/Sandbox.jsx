import { StyleSheet, Text, View } from "react-native";

const Sandbox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>One</Text>
      <Text style={styles.boxTwo}>Two</Text>
      <Text style={styles.boxThree}>Three</Text>
      <Text style={styles.boxFour}>Four</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 40,
    backgroundColor: "#ddd",
    justifyContent: "space-around",
    alignItems: "center",
  },
  boxOne: {
    backgroundColor: "violet",
    padding: 10,
    flex: 1,
  },
  boxTwo: {
    backgroundColor: "gold",
    padding: 10,
    flex: 1,
  },
  boxThree: {
    backgroundColor: "coral",
    padding: 10,
    flex: 1,
  },
  boxFour: {
    backgroundColor: "skyblue",
    padding: 10,
    flex: 1,
  },
});

export default Sandbox;
