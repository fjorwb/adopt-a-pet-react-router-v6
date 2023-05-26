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
				path='home'
				element={<HomePage />}
			/>
			<Route
				path='searcgpage'
				element={<SearchPage />}
			/>
			<Route
				path='petdetailspage'
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
