import { Outlet } from 'react-router-dom'
import { Header } from '../components'

export const Layout = () => {
  return (
    <div className='layout wrapper'>
      <Header />
      <main className='layout__body content'>
        <div className='container'>
          <Outlet />
        </div>
      </main>
    </div>
  )
}