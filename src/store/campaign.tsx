/* eslint-disable unicorn/consistent-function-scoping */
import React, { ReactNode, createContext, useContext, useMemo, useState } from 'react';

import { TCampaign } from '@/types/campaign';
import { formatData, genId } from '@/utils/utils';

const CampaignContext = createContext<{
  data: Partial<TCampaign>;
  campaignSelected: Partial<TCampaign['subCampaigns'][0]>;

  onSetInformation: (key: 'name' | 'describe', value: string) => void;
  onSubmit: () => void;
  onChangeStatusCampaign: () => void;
  onChangeNameCampaign: (value: string) => void;
  onAddCampaign: () => void;
  onSelectCampaign: (id: number) => () => void;
  onAddAdsCampaign: () => void;
  onDeleteAdsCampaign: (ids: number[]) => () => void;
  onChangeValuesAds: (id: number, key: 'name' | 'quantity', value: string | number) => void;
}>({
  data: {},
  campaignSelected: {},

  onSetInformation: () => {},
  onSubmit: () => {},
  onChangeStatusCampaign: () => {},
  onChangeNameCampaign: () => {},
  onAddCampaign: () => {},
  onSelectCampaign: () => () => {},
  onAddAdsCampaign: () => {},
  onDeleteAdsCampaign: () => () => {},
  onChangeValuesAds: () => {},
});

export const useCampaign = () => useContext(CampaignContext);

export const StoreLayout = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<TCampaign>({
    information: {
      name: '',
      describe: '',
      error: '',
    },
    subCampaigns: [
      {
        id: genId(),
        isSelected: true,
        name: 'Chiến dịch con 1',
        status: true,
        error: '',
        ads: [
          {
            id: genId(),
            name: 'Quảng cáo 1',
            quantity: 0,
          },
        ],
      },
    ],
  });

  const campaignSelected = useMemo(() => {
    return data.subCampaigns.find((v) => v.isSelected);
  }, [data]);

  const onSetInformation = (key: 'name' | 'describe', value: string) => {
    setData((prev) => ({
      ...prev,
      information: {
        ...prev.information,
        [key]: value,
        error: key === 'name' && !value ? 'Tên chiến dịch không được để trống' : '',
      },
    }));
  };

  const onSubmit = () => {
    const newData = {
      ...data,
      information: {
        ...data.information,
        error: data.information.name ? '' : 'Tên chiến dịch không được để trống',
      },
    };

    const nameValid = !data.information.name;

    const hasValid = newData.subCampaigns.find((v) => {
      const adsValid = v.ads.find((ads) => !ads.quantity);

      return !v.name || !!adsValid;
    });

    if (nameValid || !!hasValid) {
      alert('Vui lòng điền đúng và đầy đủ thông tin');
    } else {
      alert(JSON.stringify(formatData(data)));
    }

    setData(newData);
  };

  const onChangeStatusCampaign = () => {
    setData((prev) => ({
      ...prev,
      subCampaigns: prev.subCampaigns.map((v) => ({
        ...v,
        status: campaignSelected?.id === v.id ? !v.status : v.status,
      })),
    }));
  };

  const onChangeNameCampaign = (value: string) => {
    setData((prev) => ({
      ...prev,
      subCampaigns: prev.subCampaigns.map((v) => ({
        ...v,
        name: campaignSelected?.id === v.id ? value : v.name,
      })),
    }));
  };

  const onAddCampaign = () => {
    setData((prev) => {
      const newSub = prev.subCampaigns.map((v) => ({
        ...v,
        isSelected: false,
      }));
      newSub.push({
        id: genId(),
        isSelected: true,
        name: 'Chiến dịch con ' + (prev.subCampaigns.length + 1),
        status: true,
        error: '',
        ads: [
          {
            id: genId(),
            name: 'Quảng cáo 1',
            quantity: 0,
          },
        ],
      });

      return {
        ...prev,
        subCampaigns: newSub,
      };
    });
  };

  const onSelectCampaign = (id: number) => () => {
    setData((prev) => ({
      ...prev,
      subCampaigns: prev.subCampaigns.map((v) => ({
        ...v,
        isSelected: id === v.id,
      })),
    }));
  };

  const onAddAdsCampaign = () => {
    setData((prev) => ({
      ...prev,
      subCampaigns: prev.subCampaigns.map((v) => {
        const newAds = v.ads;

        newAds.push({
          id: genId(),
          name: 'Quảng cáo ' + (v.ads.length + 1),
          quantity: 0,
          error: '',
        });

        return {
          ...v,
          ads: campaignSelected?.id === v.id ? newAds : v.ads,
        };
      }),
    }));
  };

  const onDeleteAdsCampaign = (ids: number[]) => () => {
    if (!ids?.length) {
      return;
    }

    setData((prev) => ({
      ...prev,
      subCampaigns: prev.subCampaigns.map((v) => {
        const newAds = v.ads.filter((it) => !ids.includes(it.id));

        return {
          ...v,
          ads: campaignSelected?.id === v.id ? newAds : v.ads,
        };
      }),
    }));
  };

  const onChangeValuesAds = (id: number, key: 'name' | 'quantity', value: string | number) => {
    setData((prev) => ({
      ...prev,
      subCampaigns: prev.subCampaigns.map((v) => {
        const newAds = v.ads.map((it) => ({
          ...it,
          [key]: it.id === id ? value : it[key],
          error: value ? '' : 'Số lượng không được để trống',
        }));

        return {
          ...v,
          ads: campaignSelected?.id === v.id ? newAds : v.ads,
        };
      }),
    }));
  };

  return (
    <CampaignContext.Provider
      value={{
        data,
        campaignSelected: campaignSelected || {},

        onSetInformation,
        onSubmit,
        onChangeStatusCampaign,
        onChangeNameCampaign,
        onAddCampaign,
        onSelectCampaign,
        onAddAdsCampaign,
        onDeleteAdsCampaign,
        onChangeValuesAds,
      }}
    >
      {children}
    </CampaignContext.Provider>
  );
};
