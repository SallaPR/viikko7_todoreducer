import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Row({ item, dispatch }) {
  return (
    <TouchableOpacity onPress={() => dispatch({ type: "remove_todo", payload: item.id })}>
      <Text style={styles.item}>{item.newTodo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: 15,
    textAlign: "center",
    borderRadius: 10,
    margin: 5,
    fontSize: 15,
    fontWeight: "bold",
    elevation: 3,
  },
});
