import { Routes, Route } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import Layout from "./components/Layout";
import Public from "./components/Public";
import DashLayout from "./components/DashLayout";
import Welcome from "./features/auth/Welcome";
import Unauthorized from "./components/Unauthorized";
import AdminAuth from "./components/AdminAuth";
import AddStudent from "./features/addStudent/AddStudent";
import EmailForm from "./features/emailform/EmailForm";
import StudentList from "./features/getStudents/StudentList";
import Dashboard from "./pages/Dashboard";
 import ResultUploadForm from "./features/resultUploadForm/ResultUploadForm";
import Banner from "./components/Banner";

function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      {/* <Route index element={<Public />} />
      <Route path="/" element={<Layout />}> */}
//         <Route index element={<Banner />} />
//         <Route path="login" element={<Public />} />

      {/* <Route element={<AdminAuth allowedRoles={["admin", "User"]} />}> */}
      <Route path="/dash" element={<DashLayout />}>
        <Route index element={<Welcome />} />

         {/* <Route element={<AdminAuth allowedRoles={["admin"]} />}> */}
          <Route path="/dash/students" element={<StudentList />}></Route>
        {/* </Route> */}

        {/* <Route element={<AdminAuth allowedRoles={["User"]} />}> */}
          <Route
            path="/dash/students/userview"
            // element={<ResultUploadForm />}
            element={<AddStudent/>}
          ></Route>
        {/* </Route>  */}

         {/* <Route element={<RequireAuth allowedRoles={["admin"]} />}> */}
          <Route path="/dash/students/add"  element={<Dashboard />}></Route>
        {/* </Route> */}
        {/* <Route element={<RequireAuth allowedRoles={["admin"]} />}> */}
          <Route
            path="/dash/students/update/:id"
            element={<EmailForm />}
          ></Route>
        {/* </Route>  */}

        <Route
          path="/dash/students/unauthorized"
          element={<Unauthorized />}
        ></Route>

      </Route>
      </Route>


    {/* </Route> */}
  </Routes>
);
}



export default App;
