import { useState } from "react";
import Button from "./Button";

interface InputProps {
  addTodo: (text: string) => void;
}

export default function Input({ addTodo }: InputProps) {
  const [text, setText] = useState("");

  return (
    <>
      <input
        className="input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
      />

      <Button
        className="btnAdd"
        onClick={() => {
          if (!text.trim()) return;
          addTodo(text.trim());
          setText("");
        }}
      >
        Add
      </Button>
    </>
  );
}
