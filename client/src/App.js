import { Switch } from "react-router-dom";
import * as React from "react";
import Courses from "./courses/Courses";
import PublicRoute from "./routes/PublicRoute";
import Inscription from "./inscription/inscription";
import Profile from "./profile/profile";
import StudentRoute from "./routes/StudentRoute";
import Login from "./login/login";
import TeacherRoute from "./routes/TeacherRoute";
import Teacher from "./teacher/teacher";
import PrivateRoute from "./routes/PrivateRoute";
import Admin from "./admin/admin";



const App = () => {
  return(
    <Switch>
    <PublicRoute restricted={true} exact path="/" component={Courses} />
      
    <PublicRoute restricted={true} exact path="/inscription" component={Inscription} />
    <PublicRoute restricted={true} exact path="/login" component={Login} />
    
    <StudentRoute exact path="/profile" component={Profile} />
    <TeacherRoute exact path="/teacher" component={Teacher} />
    <PrivateRoute exact path="/admin" component={Admin} />
    </Switch>
  )
}
export default App;