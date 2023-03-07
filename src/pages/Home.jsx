import ParkList from "../components/ParkList"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { Button } from "@mui/material";

const Home = () => {

  const user = useSelector(state => state.auth.user)

  return (
    <>
      {
        user ? (
          <ParkList />
        ) : (
          <>
            <h1>Welcome to the BMX Parks app!</h1>
            <Link to="/about" 
                style={{
                    textDecoration:"none"
                }}
            >
                <Button color="primary">about this app</Button>
            </Link>
          </>
        )
      }
    </>
  )
}

export default Home