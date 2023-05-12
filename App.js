import { useState } from "react";
import {
  Alert,
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [todoList, setTodoList] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const handleDelete = (key) => {
    setTodoList((prev) => {
      return prev.filter((todo) => todo.key !== key);
    });
  };

  const submitHandler = (val) => {
    if (val.length > 3) {
      setTodoList((prev) => {
        return [{ text: val, key: Date.now() }, ...prev];
      });
    } else {
      Alert.alert("OOPS!!", "Todo must be at least 3 characters long.", [
        { text: "Understood", onPress: () => console.log("Closed") },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo onSubmit={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todoList}
              renderItem={({ item }) => (
                <TodoItem item={item} onDelete={handleDelete} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 30,
  },
  list: {
    marginTop: 20,
  },
});
