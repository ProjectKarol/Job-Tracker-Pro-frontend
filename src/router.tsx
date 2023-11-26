import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";
import App from "./App";
import { AddJobPage } from "./pages/addJob.page";
import ResponsiveAppBar from "./components/AppBar.component";




export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<><ResponsiveAppBar /><Outlet /></>}>
        <Route path="/" element={<App />} />
        <Route path="addJob" element={<AddJobPage />} />
        {/* ... etc. */}

      </Route>

    </>
  )
);