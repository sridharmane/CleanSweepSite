import {Partner} from './partner';

import {Street} from './street';
import {StreetAddress} from './street-address';


export interface CleanSweepData {
    number?: string;
    date: string;
    startTime: string;
    endTime: string;
    accessCode: string;
    streets: Street[];
    streetAddresses?: StreetAddress[];
    partners: Partner[];
}
export class CleanSweep {
    number: string;
    date: string;
    startTime: string;
    endTime: string;
    accessCode: string;
    streets: Street[];
    streetAddresses: StreetAddress[];
    partners: Partner[];

    constructor(csd?: CleanSweepData) {

    }
    addStreet(street: Street) {
        this.streets.push(street);
    }
    addStreetAddress(streetAddress: StreetAddress) {
        this.streetAddresses.push(streetAddress);
    }

    // public set date(v: string) {
    //     this._date = v;
    // }
    // public get date(): string {
    //     return this._date;
    // }
    // public set startTime(v: string) {
    //     this._startTime = v;
    // }
    // public get startTime(): string {
    //     return this._startTime;
    // }
    // public set endTime(v: string) {
    //     this._endTime = v;
    // }
    // public get endTime(): string {
    //     return this._endTime;
    // }
    // public set accessCode(v: string) {
    //     this._accessCode = v;
    // }
    // public get accessCode(): string {
    //     return this._accessCode;
    // }

    // public get streets(): Street[] {
    //     return this.streets;
    // }
    // public set streets(v: Street[]) {
    //     this._streets = v;
    // }
    // public get streetAddresses(): StreetAddress[] {
    //     return this._streetAddresses;
    // }
    // public get partners(): Partner[] {
    //     return this._partners;
    // }

}
