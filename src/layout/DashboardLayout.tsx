import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 p-4 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-200 ease-in-out z-50`}
      >
        <h1 className="text-2xl font-bold mb-6">G-Teck</h1>
        <nav className="space-y-4">
          <Link to="/" className="block hover:underline">🏠 Home</Link>
          <Link to="/about" className="block hover:underline">ℹ️ About</Link>
          <Link to="/profile" className="block hover:underline">👤 Profile</Link>
          <Link to="/settings" className="block hover:underline">⚙️ Settings</Link>
        </nav>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col md:ml-64">
        {/* Header */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <button
            className="md:hidden text-gray-700"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>
          <h2 className="text-xl font-semibold">Dashboard</h2>
          <button className="bg-red-500 text-white px-3 py-1 rounded">Logout</button>
        </header>

        {/* Page content */}
        <main className="flex-grow p-6">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="bg-gray-200 p-4 text-center text-sm">
          © {new Date().getFullYear()} | G-Teck
        </footer>
      </div>
    </div>
  )
}
