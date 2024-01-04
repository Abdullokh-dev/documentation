import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import UsersList from "../pages/UsersList"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/users",
    element: <UsersList />
  }
])

export default router
