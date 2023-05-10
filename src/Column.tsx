import { FC } from "react";
import { AddNewItem } from "./AddNewItem";
import { ColumnContainer, ColumnTitle } from "./styles";

type ColumnProps = {
  text: string;
  children: any;
};

export const Column: FC<ColumnProps> = ({ children, text }) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
      <AddNewItem
        onAdd={console.log}
        toggleButtonText={"+ Add another task"}
        dark
      />
    </ColumnContainer>
  );
};
