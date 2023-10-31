import { TCampaign } from '@/types/campaign';

const genIdClosure = () => {
  let id = 0;
  return () => id++;
};

export const genId = genIdClosure();

export const formatData = (data: TCampaign) => {
  return {
    information: {
      name: data.information.name,
      describe: data.information.describe,
    },
    subCampaigns: data.subCampaigns.map((v) => {
      return {
        name: v.name,
        status: v.status,
        ads: v.ads.map((ads) => {
          return {
            name: ads.name,
            quantity: ads.quantity,
          };
        }),
      };
    }),
  };
};
