import { PartnerKey } from './partner-key';

export interface IPartner {
  name: string;
  category: string;
  keys: PartnerKey[];
}
