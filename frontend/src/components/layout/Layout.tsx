import { Link, NavLink, Outlet } from 'react-router-dom'

const navMenu = [
  {
    value: 'products',
    label: 'Products',
    destination: '/products',
  },
  {
    value: 'services',
    label: 'Services',
    destination: '/services',
  },
  {
    value: 'contact',
    label: 'Contact',
    destination: '/contact',
  },
]

const Layout = () => {
  return (
    <div className="container mx-auto flex flex-col min-h-screen">
      <header className="flex items-center justify-between h-16 w-full border p-5">
        <Link className="text-lg font-extrabold text-sky-700" to={'/'}>
          Sample web
        </Link>
        <nav>
          <ul className="flex gap-5">
            {navMenu.map((menu) => (
              <NavLink
                key={menu.value}
                className={({ isActive }) =>
                  isActive ? 'border-b-2 border-sky-300 text-sky-500' : 'hover:text-sky-800'
                }
                to={menu.destination}
              >
                {menu.label}
              </NavLink>
            ))}
          </ul>
        </nav>
      </header>
      <main className="flex-1 border p-5">
        <Outlet />
      </main>
      <footer className="flex justify-center h-10 border p-2 mt-auto">
        <p>&copy; {new Date().getFullYear()} Shuya.S</p>
      </footer>
    </div>
  )
}

export default Layout
