import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import Whychoose from './components/Whychoose/Whychoose'
import Testimonials from './components/Testimonials/Testimonials'
import Newspaper from './components/Newspaper/Newspaper'
import Community from './components/Community/Community'
import Jobs from './components/Jobs/Jobs'
import Cars from './components/Cars/Cars'
import Properties from './components/Properties/Properties'
// import MySwiper from './components/Myswiper/Myswiper'

function App() {


  return (
    <>
        <Navbar></Navbar>
        <Hero></Hero>
        <Jobs></Jobs>
        {/* <MySwiper></MySwiper> */}
        <Cars></Cars>
        <Properties></Properties>
        <Community></Community>
        <Newspaper></Newspaper>
        <Whychoose></Whychoose>
        <Testimonials></Testimonials>
        <Contact></Contact>
        <Footer></Footer>
    </>
  )
}

export default App
