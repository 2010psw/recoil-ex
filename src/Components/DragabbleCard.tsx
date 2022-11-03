import { Draggable } from "react-beautiful-dnd";
import React from "react";
import styled from "styled-components";

const Card = styled.div<{ isDragging: boolean }>`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 5px 10px;
  background-color: ${(props) =>
    props.isDragging ? "#74B9FF" : props.theme.cardColor};
  box-shadow: ${(props) =>
    props.isDragging ? "3px 3px 5px rgba(0,0,0,0.05)" : "none"};
`;

interface IDragabbleCardProps {
  toDo: string;
  index: number;
}

function DraggableCard({ toDo, index }: IDragabbleCardProps) {
  console.log(toDo, "has been rendered");
  return (
    <Draggable draggableId={toDo} key={toDo} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);
