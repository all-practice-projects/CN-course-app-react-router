import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import Details from "./pages/app/details/Details";

function App() {

  const router=createBrowserRouter([
    { 
      path:"/",
      element:<Nav/>,
      children:[
        {index:true, element:<Hero/>},
        {
          path:"/courses", 
          children:[
            {path:"/courses", element:<Courses/>},
            {path:":courseId", element:<Details/>}
        ]}
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
