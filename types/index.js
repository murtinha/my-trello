export type DroppableProps = {|
  // used for shared global styles
  'data-react-beautiful-dnd-droppable': string,
|};

export type DroppableProvided = {|
  innerRef: (?HTMLElement) => void,
  droppableProps: DroppableProps,
  placeholder: ?ReactElement,
|};


