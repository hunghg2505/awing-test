import React from 'react';

import { TextField } from '@mui/material';

import { useCampaign } from '@/store/campaign';

const Information = () => {
  const { data, onSetInformation } = useCampaign();

  const onChange = (e: any) => {
    onSetInformation?.(e.target.id, e.target.value);
  };

  return (
    <>
      <TextField
        sx={{
          width: '100%',
        }}
        id='name'
        error={!!data.information?.error}
        label='Tên chiến dịch'
        required
        variant='standard'
        value={data.information?.name}
        onChange={onChange}
      />
      <br />
      <br />

      <TextField
        sx={{
          width: '100%',
        }}
        id='describe'
        label='Mô tả'
        variant='standard'
        value={data.information?.describe}
        onChange={onChange}
      />
    </>
  );
};

export default Information;
