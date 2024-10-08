import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './LandingPage/Screens/Home';
import About from './LandingPage/Screens/About';
import Course from './LandingPage/Screens/Course';
import Enroll from './LandingPage/Screens/Enroll';
import Contact from './LandingPage/Screens/Contact';
import Courses from './LandingPage/Screens/Courses';
import Product from './LandingPage/Screens/Product';
import Marketing from './LandingPage/Screens/Marketing';
import Data from './LandingPage/Screens/Data';
import Web from './LandingPage/Screens/Web';
import Blockchain from './LandingPage/Screens/Blockchain';
import BlockchainEnroll from './LandingPage/Screens/BlockchainEnroll';
import BlockchainFullStack from './LandingPage/Screens/BlockchainFullStack';
import BlockchainProduct from './LandingPage/Screens/BlockchainProduct';
import BlockchainCyber from './LandingPage/Screens/BlockchainCyber';
import Backend from './LandingPage/Screens/Backend';
import Fullstack from './LandingPage/Screens/Fullstack';
import Cybersecurity from './LandingPage/Screens/Cybersecurity';
import ProductMgt from './LandingPage/Screens/ProductMgt';
import DataScience from './LandingPage/Screens/DataScience';
import Baet from './LandingPage/Screens/Baet';

function App() {
  return (
    <div>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/blockchain' element={<Blockchain/>} />
        <Route path='/baet' element={<Baet/>} />
        <Route path='/course' element={<Course/>} />
        <Route path='/enroll' element={<Enroll/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/fullstack' element={<Fullstack/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/marketing' element={<Marketing/>} />
        <Route path='/data' element={<Data/>} />
        <Route path='/backend' element={<Backend/>} />
        <Route path='/cybersecurity' element={<Cybersecurity/>} />
        <Route path='/product-mgt' element={<ProductMgt/>} />
        <Route path='/datascience' element={<DataScience/>} />
        <Route path='/web' element={<Web/>} />
        <Route path='/blockchainenroll' element={<BlockchainEnroll/>} />
        <Route path='/blockchainfullstack' element={<BlockchainFullStack/>} />
        <Route path='/blockchainproduct' element={<BlockchainProduct/>} />
        <Route path='/blockchaincyber' element={<BlockchainCyber/>} />


      </Routes>

    </div>
  );
}

export default App;
