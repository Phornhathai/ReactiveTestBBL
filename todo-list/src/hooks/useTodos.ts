import { useEffect, useMemo, useState } from "react";
import type { Todo } from "../types/todo";
import { loadTodos, saveTodos } from "../storage/todoStorage";

export function useTodos() {
  const defaultTodos: Todo[] = useMemo(
    () => [
      { id: "1", title: "Buy food", completed: false, createdAt: Date.now() - 3000 },
      { id: "2", title: "Exercise 10 mins", completed: false, createdAt: Date.now() - 2000 },
      { id: "3", title: "Read a novel", completed: true, createdAt: Date.now() - 1000 },
    ],
    []
  );

  const [todos, setTodos] = useState<Todo[]>(defaultTodos);
  const [hydrated, setHydrated] = useState(false);

  // โหลดจาก storage ตอนเปิดแอป
  useEffect(() => {
    (async () => {
      const saved = await loadTodos();
      if (saved?.length) setTodos(saved);
      setHydrated(true);
    })();
  }, []);

  // บันทึกกลับลง storage เมื่อ todos เปลี่ยน
  useEffect(() => {
    if (!hydrated) return;
    saveTodos(todos);
  }, [todos, hydrated]);

  const addTodo = (title: string) => {
    const trimmed = title.trim();
    if (!trimmed) return false;

    const next: Todo = {
      id: String(Date.now()),
      title: trimmed,
      completed: false,
      createdAt: Date.now(),
    };

    setTodos((prev) => [next, ...prev]);
    return true;
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return { todos, addTodo, toggleTodo, deleteTodo };
}