export interface RouteElement {
    element: JSX.Element;
    path: string;
    children?: RouteElement[];
    index?: boolean;
  }
  