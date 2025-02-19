import { FlatList, StyleSheet } from "react-native";
import React from "react";
import Row from "./Row";

export default function ItemList({ state, dispatch }) {
  return (
    <FlatList
      data={state}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Row item={item} dispatch={dispatch} />}
    />
  );
}

const styles = StyleSheet.create({});
