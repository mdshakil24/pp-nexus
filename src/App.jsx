import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import Whychoose from './components/Whychoose/Whychoose'
import Testimonials from './components/Testimonials/Testimonials'
import Newspaper from './components/Newspaper/Newspaper'
import Community from './components/Community/Community'

function App() {


  return (
    <>
        <Navbar></Navbar>
        <Hero></Hero>
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
