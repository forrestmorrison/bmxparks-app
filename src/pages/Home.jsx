import { Link } from 'react-router-dom';
import { Button } from "@mui/material";
import { useAuthStatus } from '../hooks/useAuthStatus';

const Home = () => {
  useAuthStatus();

  return (
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

export default Home