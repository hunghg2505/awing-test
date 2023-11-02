import React from 'react';
import './home.css';

import { Link } from 'react-router-dom';

import CampaignForm from '@/components/CampaignForm/CampaignForm';
import { StoreLayout } from '@/store/campaign';

const Demo = () => {
  return (
    <>
      <div className='App'>
        <div className='menu'>
          <ul>
            <li className=''>
              {' '}
              <Link to='/' aria-current='page' className='active'>
                Yêu cầu
              </Link>{' '}
            </li>
            <li className=''>
              {' '}
              <Link to='/demo'>Demo</Link>{' '}
            </li>
          </ul>
        </div>

        <StoreLayout>
          <CampaignForm />
        </StoreLayout>
      </div>
    </>
  );
};

export default Demo;
