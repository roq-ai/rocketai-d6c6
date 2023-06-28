import { LocationInterface } from 'interfaces/location';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ReviewInterface {
  id?: string;
  content: string;
  location_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  location?: LocationInterface;
  user?: UserInterface;
  _count?: {};
}

export interface ReviewGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  location_id?: string;
  user_id?: string;
}
