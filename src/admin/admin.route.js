import Navbar from "./components/navbar.component";
import { Route, Switch } from "react-router-dom";
import AddNewUser from "./components/Marajul/creatNewAdmin.component";
import TestComponent from "./components/Himel/test";
import UpdateAdmin from "./components/Himel/updateAdmin.component";
function AdminRoute() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Switch>
                    <Route component={AddNewUser} path="/admin/create-new" />
                    <Route component={UpdateAdmin} path="/admin/himel/update" />
                    <Route component={TestComponent} path="/admin/himel" />
                </Switch>
            </div>
        </>
    );
}

export default AdminRoute;
