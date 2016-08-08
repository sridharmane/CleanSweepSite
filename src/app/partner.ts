export interface Partner {
  name: string,
  category: string,
  options: Array<string>
}

export interface PartnerData {
  name: string;
  category: string;
  keys: Array<{
    name: string,
    name_full: string,
    visible: boolean
  }>;
}