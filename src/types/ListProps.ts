interface ListProps<T> {
  entries: T[];
  render?: (props: T) => JSX.Element;
  children?: (props: T) => JSX.Element;
  component?: (props: T) => JSX.Element;
}

interface ListPropsWithRender<T> {
  render: (props: T) => JSX.Element;
}
interface ListPropsWithChildren<T> {
  children: (props: T) => JSX.Element;
}
interface ListPropsWithComponent<T> {
  component: (props: T) => JSX.Element;
}

export type IListProps<T> = ListProps<T> & // Interface with Optional values, but one of them Mandatory
  (ListPropsWithRender<T> | ListPropsWithChildren<T> | ListPropsWithComponent<T>);
