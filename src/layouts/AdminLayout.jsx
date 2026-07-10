import { NavLink, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="d-flex">
      <aside className="bg-dark text-white p-3" style={{ width: "250px", minHeight: "100vh" }}>
        <h4 className="mb-4">Admin</h4>

        <div className="top">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink to="/admin" end className={({ isActive }) => `nav-link ${isActive ? "active" : "text-white"}`}>
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/admin/books/create" end className={({ isActive }) => `nav-link ${isActive ? "active" : "text-white"}`}>
                Add New Book
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="down">
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