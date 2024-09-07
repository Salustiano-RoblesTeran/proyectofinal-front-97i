import Footer from "../Components/Common/Footer"
import NavBar from "../Components/Common/NavBar"
import CardSlider from "../Components/Home/CardSlider"

const Home = () => {
  return (
    <>
        <NavBar/>
    <div className="App">
      <h1 className="text-center my-4">Nuestros Médicos</h1>
      <CardSlider/>
    </div>
        <Footer/>
    </>

  )
}
export default Home