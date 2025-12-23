import { FlatList, StyleSheet, View } from "react-native";
import { TodoHeader } from "../components/TodoHeader";
import { AddTodoFromInputForm } from "../components/AddTodoForm";
import { TodoItem } from "../components/TodoItem";
import { useTodos } from "../hooks/useTodos";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export function TodoScreen() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <SafeAreaView style={s.safe}>
      <View style={s.container}>
        <TodoHeader />
        <AddTodoFromInputForm onAdd={addTodo} />
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TodoItem item={item} onToggle={toggleTodo} onDelete={deleteTodo} />
          )}
          contentContainerStyle={{ paddingBottom: 24 }}
          keyboardShouldPersistTaps="handled"
        />
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#0B1220" },
  container: { flex: 1, paddingHorizontal: 16, paddingTop: 12 },
});
