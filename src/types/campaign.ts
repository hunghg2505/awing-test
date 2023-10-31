export type TCampaign = {
  information: {
    name: string;
    describe?: string;
    error?: string;
  };

  subCampaigns: {
    id: number;
    isSelected: boolean;

    name: string;
    status: boolean;
    error?: string;

    ads: {
      id: number;
      name: string;
      quantity: number;
      error?: string;
    }[];
  }[];
};
