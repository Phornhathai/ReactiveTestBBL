import React from "react";
import { useRef, useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Keyboard,
} from "react-native";

export function AddTodoFromInputForm({
  onAdd,
}: {
  onAdd: (title: string) => boolean;
}) {
  const [text, setText] = useState("");
  const inputRef = useRef<TextInput>(null);

  const submit = () => {
    const ok = onAdd(text);
    if (!ok) {
      Alert.alert("Please enter a to-do item.");
      return;
    }
    setText("");
    Keyboard.dismiss();
    inputRef.current?.focus();
  };

  return (
    <View style={s.form}>
      <TextInput
        ref={inputRef}
        value={text}
        onChangeText={setText}
        placeholder="Add a new item..."
        placeholderTextColor="#93a3ba"
        onSubmitEditing={submit}
        style={s.input}
        returnKeyType="done"
      />
      <Pressable onPress={submit} style={s.addBtn}>
        <Text style={s.addBtnText}>Add</Text>
      </Pressable>
    </View>
  );
}

const s = StyleSheet.create({
  form: { flexDirection: "row", gap: 10, marginBottom: 12 },
  input: {
    flex: 1,
    backgroundColor: "#111A2E",
    borderWidth: 1,
    borderColor: "#243355",
    color: "white",
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 12,
  },
  addBtn: {
    backgroundColor: "#3B82F6",
    paddingHorizontal: 14,
    justifyContent: "center",
    borderRadius: 12,
  },
  addBtnText: { color: "white", fontWeight: "700" },
});
