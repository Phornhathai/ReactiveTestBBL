import React from "react";
import { Text, StyleSheet } from "react-native";

export function TodoHeader() {
  return <Text style={s.header}>To-Do List</Text>;
}

const s = StyleSheet.create({
  header: { fontSize: 28, fontWeight: "800", color: "white", marginBottom: 12 },
});
