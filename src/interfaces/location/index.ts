import { ReviewInterface } from 'interfaces/review';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface LocationInterface {
  id?: string;
  name: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  review?: ReviewInterface[];
  organization?: OrganizationInterface;
  _count?: {
    review?: number;
  };
}

export interface LocationGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  organization_id?: string;
}
