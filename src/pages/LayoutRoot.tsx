
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
const LayoutRoot = () => {
  return (
     <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Nội dung chính */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer luôn ở dưới cùng */}
      <Footer />
    </div>
  )
}

export default LayoutRoot
