import React from 'react';

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Tooltip,
} from '@mui/material';

import SubCampaign from '@/components/CampaignForm/SubCampaign';
import { useCampaign } from '@/store/campaign';

const Campaigns = () => {
  const {
    data,
    campaignSelected,
    onChangeStatusCampaign,
    onChangeNameCampaign,
    onAddCampaign,
    onSelectCampaign,
  } = useCampaign();

  return (
    <>
      <Grid gap={'15px'} container justifyContent={'flex-start'}>
        <Button
          variant='outlined'
          sx={{
            borderRadius: '50%',
            height: 64,
            backgroundColor: 'rgb(237, 237, 237)',
          }}
          onClick={onAddCampaign}
        >
          <AddOutlinedIcon
            sx={{
              color: '#f50057',
            }}
          />
        </Button>

        {data.subCampaigns?.map((subCampaign) => {
          const totalQuantity = subCampaign?.ads.reduce((acc, it) => {
            return acc + it.quantity;
          }, 0);
          const adsError = subCampaign?.ads.find((it) => !it.quantity);

          return (
            <Box
              key={subCampaign.id}
              onClick={onSelectCampaign(subCampaign.id)}
              padding={'8px'}
              minWidth={'210px'}
              maxWidth={'210px'}
              borderRadius={'4px'}
              sx={{
                cursor: 'pointer',
              }}
              boxShadow={
                '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
              }
              textAlign={'center'}
              border={
                subCampaign.id === campaignSelected.id
                  ? '2px solid rgb(33, 150, 243)'
                  : '2px solid transparent'
              }
            >
              <h6
                style={{
                  fontSize: '20px',
                  margin: '0 0 10px',
                  color: subCampaign.error || !!adsError ? 'red' : 'black',
                  wordBreak: 'break-word',
                }}
              >
                {subCampaign.name}{' '}
                <CheckCircleIcon
                  sx={{ color: subCampaign.status ? 'green' : 'gray', fontSize: '14px' }}
                />
              </h6>
              <Tooltip title='Số lượng'>
                <h5
                  style={{
                    fontSize: '24px',
                    margin: 0,
                  }}
                >
                  {totalQuantity || 0}{' '}
                </h5>
              </Tooltip>
            </Box>
          );
        })}
      </Grid>

      <Grid my={'40px'} gap={'15px'} wrap={'nowrap'} container>
        <TextField
          sx={{
            width: '100%',
          }}
          id='subCampaignName'
          label='Tên chiến dịch con'
          required
          variant='standard'
          value={campaignSelected?.name || ''}
          error={!campaignSelected?.name}
          onChange={(e) => onChangeNameCampaign(e.target.value || '')}
        />

        <FormGroup sx={{ width: 300 }}>
          <FormControlLabel
            control={<Checkbox checked={!!campaignSelected?.status} />}
            label='Đang hoạt động'
            onChange={onChangeStatusCampaign}
          />
        </FormGroup>
      </Grid>

      <SubCampaign />
    </>
  );
};

export default Campaigns;
