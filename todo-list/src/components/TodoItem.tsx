import { Pressable, StyleSheet, Text, View } from "react-native";
import type { Todo } from "../types/todo";
import React from "react";

export function TodoItem({
  item,
  onToggle,
  onDelete,
}: {
  item: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <View style={s.row}>
      <Pressable onPress={() => onToggle(item.id)} style={s.rowLeft}>
        <Text style={[s.checkbox, item.completed && s.checkboxChecked]}>
          {item.completed ? "☑" : "☐"}
        </Text>
        <Text style={[s.text, item.completed && s.textDone]} numberOfLines={1}>
          {item.title}
        </Text>
      </Pressable>

      <Pressable
        onPress={() => onDelete(item.id)}
        style={s.deleteBtn}
        hitSlop={10}
      >
        <Text style={s.deleteText}>Delete</Text>
      </Pressable>
    </View>
  );
}

const s = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0F1830",
    borderWidth: 1,
    borderColor: "#1F2A44",
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  rowLeft: { flex: 1, flexDirection: "row", alignItems: "center", gap: 10 },
  checkbox: { fontSize: 18, color: "#93C5FD" },
  checkboxChecked: { color: "#34D399" },
  text: { flex: 1, color: "white", fontSize: 16 },
  textDone: { color: "#94A3B8", textDecorationLine: "line-through" },
  deleteBtn: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    backgroundColor: "#2A1B1B",
    borderWidth: 1,
    borderColor: "#4B2323",
  },
  deleteText: { color: "#FCA5A5", fontWeight: "700" },
});
