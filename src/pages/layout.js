import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
         
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;