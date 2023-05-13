import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const TodoItem = ({ item, onDelete }) => {
  return (
    <TouchableOpacity onPress={() => onDelete(item.key)}>
      <View style={styles.item}>
        <MaterialIcons name="delete" size={18} color="#333" />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    color: "#444",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginLeft: 10,
  },
});

export default TodoItem;
