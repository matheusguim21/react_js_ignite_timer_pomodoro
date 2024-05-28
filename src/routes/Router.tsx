import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'

import { History } from '../pages/History'
import { Home } from '../pages/Home/index'

export function Router() {
  return (
    <Routes>
      <Route path='/'
      element={<DefaultLayout/>}
      >
        <Route element={<Home/>} path="/" />
        <Route element={<History/>} path="/history" />
      </Route>
    </Routes>
  )
}
