import { Form } from "./component/Form/Form"
import { Navbar } from "./component/Navbar/Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from "./pages/Home/Home"
import { AboutUs } from "./pages/AboutUs/AboutUs"
import { Products } from "./pages/Products/Products"
import { NotFound } from "./pages/NotFound/NotFound"
import { Dashboard } from "./pages/Dashboard/Dashboard"
import { PrivateRoute } from "./pages/PrivateRoute"
const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/"  element={<Home />} />
                <Route path="/login"  element={<Form />} />
                <Route path="/"  element={<Form />} />
                <Route path="/products"  element={<Products />} />
                <Route path="/about-us"  element={<AboutUs />} />
                <Route element={<PrivateRoute/>}>
                    <Route path="/dashboard"  element={<Dashboard />} />
                </Route>
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}
export default App
