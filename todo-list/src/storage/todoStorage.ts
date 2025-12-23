import AsyncStorage from "@react-native-async-storage/async-storage";
import type { Todo } from "../types/todo";

const STORAGE_KEY = "todo:list:v1";

export async function loadTodos(): Promise<Todo[] | null> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Todo[]) : null;
  } catch {
    return null;
  }
}

export async function saveTodos(todos: Todo[]): Promise<void> {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch {}
}
