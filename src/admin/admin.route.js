import Navbar from "./components/navbar.component";
import { Route, Switch } from "react-router-dom";
import AddNewUser from "./components/Marajul/creatNewAdmin.component";
function AdminRoute() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Switch>
                    <Route component={AddNewUser} path="/admin/create-new" />
                </Switch>
            </div>
        </>
    );
}

export default AdminRoute;
