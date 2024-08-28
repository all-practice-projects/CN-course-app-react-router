import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import Details from "./pages/app/details/Details";
import Learn from "./pages/app/learn/Learn";
import Chapter from "./pages/app/chapter/Chapter";

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
        {                                                 
          path:"/learn/:courseId",                        //child of Nav, but not the child of course
          element:<Learn/>,
          children:[
            {path:"chapter/:chapterId", element:<Chapter/>}  //child of learn
          ]
        }   
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
