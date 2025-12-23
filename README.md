# To-Do List (React Native + Expo)

แอป To-Do List สำหรับ Technical Test  
ทำงานหลัก: แสดงรายการเริ่มต้น 3 รายการ + เพิ่มรายการใหม่ได้ทันที  
โบนัส: ทำเครื่องหมายว่าเสร็จแล้ว (completed), ลบรายการ, และบันทึกข้อมูลลงเครื่อง

---


## Prerequisites
- Node.js (แนะนำ LTS)
- Expo Go (สำหรับรันบนมือถือ)
- npm (มากับ Node.js)

---

## Run
เริ่ม dev server:
```bash
npx expo start

## Features

- Display default items on launch
- Allow users to add new items via input field and button
- Update the list immediately upon adding new items (real-time update)
- Mark items as completed (with strikethrough or checkbox)
- Delete items from the list
- Add basic styling for visual appeal
- (Persist data using local storage ข้อมูลด้วย AsyncStorage (ปิดแอปแล้วข้อมูลยังอยู่)

---

## Tech Stack

- React Native (Expo)
- TypeScript
- AsyncStorage (local storage)

---

## Project Structure

```txt
src/
  components/        # UI component ย่อย (Header, Form, Item)
  hooks/             # business logic (add/toggle/delete/persist)
  screens/           # หน้าจอหลักของแอป
  storage/           # load/save local storage
  types/             # TypeScript types
```
