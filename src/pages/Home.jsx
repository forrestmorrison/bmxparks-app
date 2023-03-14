import { useAuthStatus } from '../hooks/useAuthStatus';
import ImageSlider from '../components/ImageSlider';

const slides = [
  {url: "http://localhost:3000/images/home1.png", title: "home1"},
  {url: "http://localhost:3000/images/home2.png", title: "home2"},
  {url: "http://localhost:3000/images/home3.png", title: "home3"},
  {url: "http://localhost:3000/images/home4.png", title: "home4"},
]

const containerStyles = {
  width: "500px",
  height: "250px",
  margin: "0 auto"
}

const Home = () => {
  useAuthStatus();

  return (
    <>
      <h1>Welcome to the BMX Parks app!</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} /> 
      </div>
      <div className="home-description">
        <p>The BMX Parks app is a database BMX Parks where you can add your favorite BMX park, as well as rate & review any park in the app.</p>
      </div>
    </>
  )
}

export default Home