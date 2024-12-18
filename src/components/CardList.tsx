import { useState } from "react";
import Input from "./Input";
import Item from "./Item";
import Button from "./Button";

interface TodoProps {
  id: number;
  text: string;
  isDone: boolean;
}

export default function CardList() {
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  function addTodo(text: string) {
    const newTodo = { id: todos.length, text, isDone: false };
    setTodos([newTodo, ...todos]);
  }

  function handleAllClick() {
    setFilter("all");
  }

  function handleActiveClick() {
    setFilter("active");
  }

  function handleCompletedClick() {
    setFilter("completed");
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.isDone;
    if (filter === "completed") return todo.isDone;
    return true;
  });

  
  return (
    <>
      <div className="card">
        <Input addTodo={addTodo} />

        <ul className="card__list">
          {filteredTodos.map((todo) => (
            <Item
              key={todo.id}
              text={todo.text}
              isDone={todo.isDone}
              toggleIsDone={() => {
                setTodos(prevTodos => 
                  prevTodos.map(todoItem => 
                    todoItem.id === todo.id 
                      ? { ...todoItem, isDone: !todoItem.isDone } 
                      : todoItem
                  )
                );
              }}
            />
          ))}
        </ul>
      </div>

      <Button className="btnAll" onClick={handleAllClick}>
        All
      </Button>
      <Button className="btnActive" onClick={handleActiveClick}>
        Active
      </Button>
      <Button className="btnCompleted" onClick={handleCompletedClick}>
        Completed
      </Button>
    </>
  );
}
