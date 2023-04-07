import './App.css';
import {RouterProvider,} from "react-router-dom";
import router from './Router/Routes/Routes';

function App() {
  return (
    <div data-theme="dracula">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
