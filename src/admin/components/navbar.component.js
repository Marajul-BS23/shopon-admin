import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light nav-box">
            <div className="navbar-brand mx-3">
                <span className="badge bg-primary">Shop ON</span>
            </div>

            <Link className="navbar-brand lf" to="/admin/create-new">
                Creat New Admin
            </Link>
            <Link className="navbar-brand lf" to="/admin/update">
                Update Admin
            </Link>
        </nav>
    );
};

export default Navbar;
