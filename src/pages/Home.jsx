import Navbar from '../scenes/Navbar';
import Options from '../scenes/Options';
import Background from '../assets/background.svg';
import Projects from '../scenes/Projects';
import Footer from '../scenes/footer';


const Home = () => {
  return (
    <div className=' w-screen bg-red-100'>
      <div className=' w-4/5 mx-auto  bg-center bg-no-repeat '
      style={{ backgroundImage: `url(${Background})` }} >
        <Navbar />
        <Options />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}

export default Home;