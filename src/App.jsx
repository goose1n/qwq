import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Layout from './Components/Layout/Layout';
import Nav from './Components/Nav/Nav';
import Home from './Pages/Home/Home';
import Error from './Pages/Error/Error'
import Licenses from './Pages/Licenses/Licenses';
import About from './Pages/About/About';
import Shop from './Pages/Shop/Shop';
import Team from './Pages/Team/Team';
import SerSin from './Pages/ServiceSingle/SerSin';
import Pass from './Pages/PasswordProtect/Pass';
import Service from './Pages/Service/Service'
import Blog from './Pages/Blog/Blog';
import BlogSingle3 from './Pages/BlogSingle3/BlogSingle3';
import ShopSingle from './Pages/ShopSingle/ShopSingle';
import Portfolio from './Pages/Portfolio/Portfolio';
import PorSin from './Pages/PortfolioSingle/PorSin';
import Change from './Pages/Changelog/Change';
import Contact from './Pages/Contact/Contact';
import Style from './Pages/StylePage/StylePage';

function App() {

  return (
    <Layout>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/shop' element={<Shop/>} />
        <Route path='/shopsingle' element={<ShopSingle/>} />
        <Route path='/team'element={<Team/>}/>
        <Route path='/servicesingle' element={<SerSin/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='/style' element={<Style/>}/>
        <Route path='/password' element={<Pass/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/licences' element={<Licenses/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/portfoliosingle' element={<PorSin/>} />
        <Route path='/changelog' element={<Change/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/BlogSingle3' element={<BlogSingle3/>}/>
      </Routes>
      <Footer/>
    </Layout>
    
  )
}

export default App
