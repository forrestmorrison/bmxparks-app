import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const AddPark = () => {
  return (
      <form noValidate autoComplete='off'>
        <TextField id="outlined-basic" label="park name" variant="outlined" />
        <br />
        <TextField id="outlined-basic" label="park address" variant="outlined" />
        <br />
        <Button color="primary">Add Park</Button>
      </form>
  );
}

export default AddPark