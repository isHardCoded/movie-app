import { createRoot } from 'react-dom/client'
import './index.css'
import { HomePage } from './pages/home'
import { MoviePage } from './pages/movie'
import { Layout } from './components/layout'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UsersPage } from './pages/users'

createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<Routes>
			<Route element={<Layout />}>
				<Route path='/' element={<HomePage />} />
				<Route path='/movie/:id' element={<MoviePage />} />
				<Route path='/users' element={<UsersPage />} />				
			</Route>
		</Routes>
	</BrowserRouter>,
)
