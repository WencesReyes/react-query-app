import { NavLink, Outlet } from "react-router-dom";

const NavLayout = () => {
  return(<div style={{minHeight: '100vh', width: '100vw'}}>
    <nav>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='superheroes'>Superheroes</NavLink>
        </li>
        <li>
          <NavLink to='rqsuperheroes'>RQSuperheroes</NavLink>
        </li>
      </ul>
    </nav>
    <Outlet />
  </div>)
}

export default NavLayout;