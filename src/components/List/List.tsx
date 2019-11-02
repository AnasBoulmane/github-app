import React from "react";
import { IListProps } from "../../types/ListProps";

// Use Render Props for Cross-Cutting Concerns
function List<T> ({ entries, children, render, component }: IListProps<T>) {
  const renderComponent = children || render || component || ((props: T) => <div />);
  return <>{entries.map((value: T) => renderComponent(value))}</>;
}

export default List;
