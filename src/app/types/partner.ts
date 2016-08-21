import {PartnerKey} from './partner-key';

export interface Partner {
  name: string;
  category: string;
  keys: PartnerKey[];
}
