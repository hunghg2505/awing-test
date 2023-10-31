import React from 'react';

import { Button, Grid } from '@mui/material';

import { useCampaign } from '@/store/campaign';

const ButtonSubmit = () => {
  const { onSubmit } = useCampaign();

  return (
    <Grid
      sx={{
        borderBottom: '1px solid gray',
      }}
      container
      direction='row'
      justifyContent='flex-end'
      padding={1}
    >
      <Button onClick={onSubmit} variant='contained'>
        Submit
      </Button>
    </Grid>
  );
};

export default ButtonSubmit;
