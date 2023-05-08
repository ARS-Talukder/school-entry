import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddStudent from './Components/Home/AddStudent';
import Home from './Components/Home/Home';
import ManageStudent from './Components/Home/ManageStudent';
import Login from './Components/Login/Login';
import RequireAuth from './Components/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import View from './Components/Home/View';
import Edit from './Components/Home/Edit';

function App() {
  return (
    <div className='app-container'>
      <Routes>
        <Route path='/' element={<RequireAuth><Home></Home></RequireAuth>}>
          <Route index element={<AddStudent></AddStudent>}></Route>
          <Route path='/manage' element={<ManageStudent></ManageStudent>}></Route>
        </Route>

        <Route path='/view/:pincode' element={<RequireAuth><View></View></RequireAuth>}></Route>
        <Route path='/edit/:pincode' element={<RequireAuth><Edit></Edit></RequireAuth>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
      </Routes>
      <ToastContainer />

    </div>
  );
}

export default App;
