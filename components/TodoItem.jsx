import { StyleSheet, Text, TouchableOpacity } from "react-native";

const TodoItem = ({ item, onDelete }) => {
  return (
    <TouchableOpacity onPress={() => onDelete(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
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
  },
});

export default TodoItem;
