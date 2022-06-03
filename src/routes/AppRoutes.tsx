import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from '../layout/Layout'
import { Cart } from '../pages/Cart'
import { HomePage } from '../pages/HomePage'
import { NotFound } from '../pages/NotFound'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={
          <Suspense fallback={<div>Идёт загрузка корзины...</div>}>
            <HomePage />
          </Suspense>
        } />
        <Route path='cart' element={
          <Suspense fallback={<div>Идёт загрузка корзины...</div>}>
            <Cart />
          </Suspense>
        } />
        <Route path='*' element={
          <Suspense fallback={<div>Идёт загрузка корзины...</div>}>
            <NotFound />
          </Suspense>
        } />
      </Route>
    </Routes>
  )
}