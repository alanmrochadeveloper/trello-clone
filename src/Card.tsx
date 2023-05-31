import { CardContainer } from "./styles";
import { useRef } from "react";
import { useItemDrag } from "./utils/useItemDrag";
import { useDrop } from "react-dnd";
import { useAppState } from "./state/AppStateContext";
import { isHidden } from "./utils/isHidden";
import { moveTask, setDraggedItem } from "./state/actions";

type CardProps = {
  id: string;
  text: string;
  columnId: string;
  isPreview?: boolean;
};

export const Card = ({ text, id, columnId, isPreview }: CardProps) => {
  const { draggedItem, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);
  return (
    <CardContainer
      isHidden={isHidden(draggedItem, "CARD", id, isPreview)}
      isPreview={isPreview}
      ref={ref}
    >
      {text}
    </CardContainer>
  );
};
