import React,{useState,useEffect} from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Login from './component/Login/Login'
import Register from './component/Register/register'
import Contact from './component/Contact/contact'
import Team from './component/Team/team'
import Navbar from './component/Navbar/navbar'
import Product from './component/Product/product'
import Store from './component/Store/store'
const App = () => {
	
	const [UserName, setUserName] = useState(localStorage.getItem("name"))
	console.log(UserName)
	return (
		<div>
			{UserName!=null && <Navbar/>}
			
			<BrowserRouter>
			 <Routes> 
				<Route path="/" exact element={<Login/>} />
				<Route path="/register" exact element={<Register/>}/>
				<Route path='/contactus' exact element={<Contact/>}/>
				<Route path='/team' exact element={<Team/>}/>
				<Route path='/product' exact element={<Product/>}/>
				<Route path='/store' exact element={<Store/>}/>
			

			 </Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
