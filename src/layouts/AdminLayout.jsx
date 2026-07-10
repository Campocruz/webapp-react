import { NavLink, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="d-flex">

      <aside className="bg-dark text-white p-1 d-flex flex-column justify-content-between " style={{ width: "225px", minHeight: "100vh" }}>

        <div className="top">
          <h4 className="mb-4 text-center">Admin</h4>

          <ul className="nav flex-column list-group list-group-flush">
            <li className="nav-item">
              <NavLink to="/admin" end className={({ isActive }) => `nav-link ${isActive ? "active" : "text-white"}`}>
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/admin/movies/create" end className={({ isActive }) => `nav-link ${isActive ? "active" : "text-white"}`}>
                Add New Book
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="down text-center bg-danger rounded">
          <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? "active" : "text-white"}`}>
            Exit
          </NavLink>
        </div>

      </aside>

      <main className="flex-grow-1 p-4">
        <Outlet />

      </main>

    </div>
  );
}