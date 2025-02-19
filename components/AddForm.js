import { Button, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";

export default function AddForm({ dispatch }) {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch({ type: "add_todo", payload: newTodo });
      setNewTodo("");
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Enter new todo"
        value={newTodo}
        onChangeText={setNewTodo}
      />
      <Button title="Save" onPress={handleAddTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 5,
    backgroundColor: "#fff",
    marginRight: 10,
  },
});
