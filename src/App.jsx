import './App.css'
import Footer from './Footer'
import Header from './Header'
import HeroSection from './HeroSection'
import TaskBoard from './task/TaskBoard'

function App() {
 

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center">
      <HeroSection />
      <TaskBoard />
      </div>
      
      <Footer />
    </>
  )
}

export default App
