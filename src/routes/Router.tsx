import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'

import { HIstory } from '../pages/HIstory'
import { Home } from '../pages/Home/index'

export function Router() {
  return (
    <Routes>
      <Route path='/'
      element={<DefaultLayout/>}
      >
        <Route element={<Home/>} path="/" />
        <Route element={<HIstory/>} path="/history" />
      </Route>
    </Routes>
  )
}
