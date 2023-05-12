import { FC } from "react";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./state/AppStateContext";
import { ColumnContainer, ColumnTitle } from "./styles";
import { Card } from "./Card";

type ColumnProps = {
  id: string;
  text: string;
};

export const Column: FC<ColumnProps> = ({ text, id }) => {
  const { getTasksByListId } = useAppState();
  const tasks = getTasksByListId(id);

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card text={task.text} key={task.id} id={task.id} />
      ))}
      <AddNewItem
        onAdd={console.log}
        toggleButtonText={"+ Add another task"}
        dark
      />
    </ColumnContainer>
  );
};
