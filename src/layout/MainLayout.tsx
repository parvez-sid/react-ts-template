import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components//footer/Footer'

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto p-4">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  )
}
