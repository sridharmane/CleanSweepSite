import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
// import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
// import * as firebase from 'firebase';

@Injectable()
export class GeocodingService {


  city: string = 'Buffalo';
  // postalCode:number = 14215;
  countryCode: string = 'US';
  requiredComponents = [
    'street_number', // house number
    'route', // street
    'locality', // city
    'administrative_area_level_1', // State
    'country',
    'postal_code'
  ];
  zoom: number = 20;
  label: string = 'A';
  apiKey: string = 'AIzaSyBANGnXi88eHt1LQU7hWtFwjF7TGWpkZyc';

  streetAddresses: FirebaseListObservable<any[]>;

  mapData: any = {
    'address_components': [
      {
        'long_name': '37',
        'short_name': '37',
        'types': ['street_number']
      },
      {
        'long_name': 'Tyler Street',
        'short_name': 'Tyler St',
        'types': ['route']
      },
      {
        'long_name': 'University',
        'short_name': 'University',
        'types': ['neighborhood', 'political']
      },
      {
        'long_name': 'Buffalo',
        'short_name': 'Buffalo',
        'types': ['locality', 'political']
      },
      {
        'long_name': 'Erie County',
        'short_name': 'Erie County',
        'types': ['administrative_area_level_2', 'political']
      },
      {
        'long_name': 'New York',
        'short_name': 'NY',
        'types': ['administrative_area_level_1', 'political']
      },
      {
        'long_name': 'United States',
        'short_name': 'US',
        'types': ['country', 'political']
      },
      {
        'long_name': '14214',
        'short_name': '14214',
        'types': ['postal_code']
      },
      {
        'long_name': '1112',
        'short_name': '1112',
        'types': ['postal_code_suffix']
      }
    ],
    'formatted_address': '37 Tyler St, Buffalo, NY 14214, USA',
    'geometry': {
      'bounds': {
        'northeast': {
          'lat': 42.9524324,
          'lng': -78.82787359999999
        },
        'southwest': {
          'lat': 42.9522803,
          'lng': -78.82805429999999
        }
      },
      'location': {
        'lat': 42.9523563,
        'lng': -78.8279639
      },
      'location_type': 'ROOFTOP',
      'viewport': {
        'northeast': {
          'lat': 42.9537053302915,
          'lng': -78.82661496970849
        },
        'southwest': {
          'lat': 42.95100736970851,
          'lng': -78.82931293029151
        }
      }
    },
    'place_id': 'ChIJKXpVP6Ny04kREkIH8MdLl7I',
    'types': ['premise']
  };



  constructor(af: AngularFire) {
    this.streetAddresses = af.database.list('streetAddresses');
  }

  getGeocodeUrl(address): string {
    let safeAddress: string = address.split(' ').join('+');
    // console.log(safeAddress);
    let url = `https://maps.googleapis.com/maps/api/geocode/json?
    address=${safeAddress}&
    components=country:${this.countryCode}&
    key=${this.apiKey}`;
    // console.log(url);
    return url;
  }
  extractAddressComponents(addressComponents: Array<any>, componentNames: Array<string>): any {
    let extractedData = {};
    addressComponents.forEach((ac) => {
      componentNames.forEach((cName) => {
        if (ac.types.indexOf(cName) === 0) {
          extractedData[cName] = ac.short_name;
        }
      });
    });
    // console.log(extractedData);
    return extractedData;
  }
  extractLocation(geometry: any): any {
    return geometry.location;
  }
  getMapData(mapResult): any {
    let mapData = {};
    Object.assign(mapData, this.extractAddressComponents(mapResult.address_components, this.requiredComponents));
    // console.log(mapData);
    Object.assign(mapData, this.extractLocation(mapResult.geometry));
    console.log(mapData);
  }
}
