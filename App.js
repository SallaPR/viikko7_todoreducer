import { useReducer } from "react";
import { StyleSheet, Text, View } from "react-native";
import uuid from "react-native-uuid";
import AddForm from "./components/AddForm";
import ItemList from "./components/ItemList";

const todoReducer = (state, action) => {
  switch (action.type) {
    case "add_todo":
      return [...state, { id: uuid.v4(), newTodo: action.payload }];
    case "remove_todo":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      throw new Error();
  }
};

export default function App() {
  const [state, dispatch] = useReducer(todoReducer, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo list</Text>
      <AddForm dispatch={dispatch} />
      <ItemList state={state} dispatch={dispatch} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 10,
    marginTop: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
  },
});
