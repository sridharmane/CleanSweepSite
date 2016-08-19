import { Injectable, Inject } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';






@Injectable()
export class FirebaseDBService {

  properties: FirebaseListObservable<any[]>;
  mapsAPIKey: string = 'AIzaSyBANGnXi88eHt1LQU7hWtFwjF7TGWpkZyc';
  baseUrl: string = 'https://maps.googleapis.com/maps/api/geocode/json?';
  // address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key='
  constructor(@Inject(AngularFire) af: AngularFire) {
    this.properties = af.database.list('properties');
  }

  getGeocoding(address: string): any {
    return {}
  };
  private buildUrl(address: string): string {
    return this.baseUrl;
  }

}
