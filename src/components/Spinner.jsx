import spinner from "../images/spinner.gif"
import { Box } from "@mui/material"


const loadingSpinner = spinner

const Spinner = () => {
  return (
    <div>
        <Box 
            component="img"
            sx={{
                height: 20,
                width: 20,
                marginRight: 1
            }}
            alt="spinner"
            src={loadingSpinner}
        />
    </div>
  )
}

export default Spinner