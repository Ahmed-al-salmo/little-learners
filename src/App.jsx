
import Header from './components/Header/header';
import Home from './pages/home';
import AboutUs from './pages/About/aboutUs';
import Academics from './pages/Academics/academics';
import Admissions from './pages/Admissions/admissions';
import NavigateThrough from './components/navigateThroughPages/navigateThrough';
import Footer from './components/footer/footer';
import './App.css'


function App() {


  return (
    <h1>
      <Header />
      <Home />
      <AboutUs />
      <Academics/>
      <Admissions />
      <NavigateThrough />
      <Footer />
    </h1>
  )
}

export default App
