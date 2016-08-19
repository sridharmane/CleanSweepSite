export interface StreetAddress {
  place_id: string;
  street_number: number;
  route: string;
  neighborhood?: string;
  locality: string;
  country: string;
  postal_code: number;
  formatted_address: string;
  original_address: string;
  location: {
    lat: number;
    lng: number
  };
}
