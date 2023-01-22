import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const AddPark = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField id="outlined-basic" label="park name" variant="outlined" />
        <TextField id="outlined-basic" label="park address" variant="outlined" />
      </div>
    </Box>
  );
}

export default AddPark