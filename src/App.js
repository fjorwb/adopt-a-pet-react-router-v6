// Add react-router-dom imports
import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route
} from 'react-router-dom'

import HomePage from './pages/home'
import SearchPage from './pages/search'
import PetDetailsPage from './pages/detail'
import PetDetailsNotFound from './pages/petDetailsNotFound'
import Root from './components/root'

// create router with JSX Route elements
const appRouter = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path='/'
			element={<Root />}>
			<Route
				index
				element={<HomePage />}
			/>
			<Route
				path=':type'
				element={<HomePage />}></Route>

			<Route
				path='/search'
				element={<SearchPage />}
			/>
			<Route
				path='/:type/:id'
				element={<PetDetailsPage />}
			/>
			<Route
				path='petdetailsnotfound'
				element={<PetDetailsNotFound />}
			/>
		</Route>
	)
)

function App() {
	return <RouterProvider router={appRouter} />
}

export default App
