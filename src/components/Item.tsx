interface ItemProps {
  text: string;
  isDone: boolean;
  toggleIsDone: () => void;
}

export default function Item({ text, isDone, toggleIsDone }: ItemProps) {
  return (
    <li className="item" onClick={toggleIsDone}>
      {isDone ? `✅ ${text}` : `⬜ ${text}`}
    </li>
  );
}
