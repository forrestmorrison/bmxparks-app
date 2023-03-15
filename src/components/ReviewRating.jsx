import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function BasicRating({ rating, onChange }) {
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={rating}
        sx={{
            mt: 2
        }}
        onChange={(event, newValue) => {
          onChange(newValue);
        }}
      />
    </Box>
  );
}