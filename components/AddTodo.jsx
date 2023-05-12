import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const AddTodo = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const changeHandler = (text) => {
    setText(text);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="New todo ..."
        onChangeText={changeHandler}
      />
      <Button onPress={() => onSubmit(text)} title="Add Todo" color="skyblue" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});

export default AddTodo;
