import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import Details from "./pages/app/details/Details";
import Learn from "./pages/app/learn/Learn";

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
        ]},
        {path:"/learn/:courseId", element:<Learn/>}   //child of Nav, but not the child of course
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
