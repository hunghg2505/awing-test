import React from 'react';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Box, Grid, Tab } from '@mui/material';

import ButtonSubmit from '@/components/ButtonSubmit/ButtonSubmit';
import Campaigns from '@/components/CampaignForm/Campaigns';
import Information from '@/components/CampaignForm/Information';

const CampaignForm = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <ButtonSubmit />

      <Grid
        sx={{
          padding: '1rem',
        }}
      >
        <Box
          sx={{
            boxShadow:
              '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
            borderRadius: '4px',
          }}
        >
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label='lab API tabs example'>
                <Tab label='THÔNG TIN' value='1' />
                <Tab label='CHIẾN DỊCH CON' value='2' />
              </TabList>
            </Box>
            <TabPanel value='1'>
              <Information />
            </TabPanel>
            <TabPanel value='2'>
              <Campaigns />
            </TabPanel>
          </TabContext>
        </Box>
      </Grid>
    </>
  );
};

export default CampaignForm;
