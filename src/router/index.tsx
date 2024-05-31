import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { mainRoutes } from "./router";
import { RouteElement } from "./index.types";

function generateRoutes(routes: RouteElement[]): JSX.Element[] {
  return routes.map((element) => {
    if (element.children && element.children.length > 0) {
      return (
        <Route key={element.path} path={element.path} element={element.element}>
          {generateRoutes(element.children)}
        </Route>
      );
    } else {
      return (
        <Route
          key={element.path}
          path={element.path}
          element={element.element}
        />
      );
    }
  });
}

const mainAdminRoutes: JSX.Element[] = generateRoutes(mainRoutes);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {mainAdminRoutes}
      <Route path="*" element={<div>page not found</div>} />
    </>
  )
);

const MainRouter = () => {
  return <RouterProvider router={router} />;
};

export default MainRouter;
