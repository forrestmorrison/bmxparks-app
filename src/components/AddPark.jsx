import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const AddPark = () => {

  return (
    <div className='form-container'>
      <form noValidate autoComplete="off" className='form'>
        <TextField
          fullWidth
          id="outlined-basic" 
          label="park name"
          required
          sx={{
            margin: 1
          }}
          variant="outlined"
        />
        <TextField
          fullWidth
          id="outlined-basic" 
          label="park address"
          required
          sx={{
            margin: 1
          }}
          variant="outlined"
        />
        <Button 
          color="primary"
          sx={{
            margin: 1
          }}
        >
          Add Park
        </Button>
      </form>
    </div>
  );
}

export default AddPark