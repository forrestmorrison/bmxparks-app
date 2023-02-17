import ParkList from "../components/ParkList"
import { useSelector } from 'react-redux'

const Home = () => {

  const user = useSelector(state => state.auth.user)

  return (
    <>
      {
        user ? (
          <ParkList />
        ) : (
          <h1>Welcome to the BMX Parks app!</h1>
        )
      }
    </>
  )
}

export default Home