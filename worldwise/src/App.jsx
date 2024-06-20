import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
// import Product from "./pages/Product.jsx";
// import Homepage from "./pages/Homepage.jsx";
// import Pricing from "./pages/Pricing.jsx";
// import PageNotFound from "./pages/PageNotFound.jsx";
// import AppLayout from "./pages/AppLayout.jsx";
// import Login from "./pages/Login.jsx";
import CityList from "./components/CityList.jsx";
import CountryList from "./components/CountryList.jsx";
import City from "./components/City.jsx";
import Form from "./components/Form.jsx";
import {CitiesProvider} from "./contexts/CitiesContext.jsx";
import {AuthProvider} from "./contexts/FakeAuthContext.jsx";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";
import {lazy, Suspense} from "react";
import SpinnerFullPage from "./components/SpinnerFullPage.jsx";

const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Login = lazy(() => import("./pages/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));


function App() {
    return (
        <AuthProvider>
            <CitiesProvider>
                <BrowserRouter>
                    <Suspense fallback={<SpinnerFullPage/>}>
                        <Routes>
                            <Route index element={<Homepage/>}/>
                            <Route path="product" element={<Product/>}/>
                            <Route path="pricing" element={<Pricing/>}/>
                            <Route path="login" element={<Login/>}/>
                            <Route path="app" element={<ProtectedRoute><AppLayout/></ProtectedRoute>}>
                                <Route index element={<Navigate replace to={'cities'}/>}/>
                                <Route path="cities" element={<CityList/>}/>
                                <Route path="cities/:id" element={<City/>}/>
                                <Route path="countries" element={<CountryList/>}/>
                                <Route path="form" element={<Form/>}/>
                            </Route>
                            <Route path="*" element={<PageNotFound/>}/>
                        </Routes>
                    </Suspense>
                </BrowserRouter>
            </CitiesProvider>
        </AuthProvider>
    )
}

export default App;