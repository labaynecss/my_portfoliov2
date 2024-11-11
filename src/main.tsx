
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css'

import { createBrowserRouter , RouterProvider } from "react-router-dom";
import { Root } from "./routes/Root.tsx";
import { ThemeProvider } from "./context/ThemeProvider.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
    <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
