import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router';
import cookie from 'cookie';
import Home from './components/Home';
import About from './components/About';
import Car from './components/Car';
import Login from './components/Login';

// Write checkAuth function here
// Check the cookies for a cookie called "loggedIn"
const checkAuth = () => {
	const cookies = cookie.parse(document.cookie);
	return cookies['loggedIn'] ? true : false;
};

// Write ProtectedRoute function here
const ProtectedRoutes = () => {
	return checkAuth() ? <Outlet /> : <Navigate to="/login" />;
};

const Router = () => {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route element={<ProtectedRoutes />}>
				<Route exact path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/car/:id" element={<Car />} />
			</Route>
		</Routes>
	);
};

export default Router;
