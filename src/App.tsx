import CampaignForm from '@/components/CampaignForm/CampaignForm';
import { StoreLayout } from '@/store/campaign';

function App() {
  return (
    <div className='App'>
      <StoreLayout>
        <CampaignForm />
      </StoreLayout>
    </div>
  );
}

export default App;
