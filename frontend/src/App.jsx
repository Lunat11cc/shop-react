import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./pages/home/Home.jsx";
import Register from './pages/register/register.jsx'
import Login from './pages/login/login.jsx'
import RequireAuth from './hoc/RequireAuth.jsx'
import RequireLogout from './hoc/RequireLogout.jsx'
import { AuthProvider } from "./hoc/AuthProvider.jsx";
import ShopContextProvider from "./context/ShopContextProvider.jsx";

function App() {
    return (
        <AuthProvider>
            <ShopContextProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
                        <Route path="/register" element={<RequireLogout><Register /></RequireLogout>} />
                        <Route path="/login" element={<RequireLogout><Login /></RequireLogout>} />
                    </Routes>
                </Router>
            </ShopContextProvider>
        </AuthProvider>
    )
}

export default App
