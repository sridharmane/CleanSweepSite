import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DataService } from '../data.service';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_BUTTON_DIRECTIVES, MdButton } from '@angular2-material/button';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list/list';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';


@Component({
  moduleId: module.id,
  selector: 'app-add-clean-sweep',
  directives: [
    MD_INPUT_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MdIcon,
    MD_LIST_DIRECTIVES,
    MdButton,
    MD_TOOLBAR_DIRECTIVES
  ],
  providers: [MdIconRegistry],
  templateUrl: 'add-clean-sweep.component.html',
  styleUrls: ['add-clean-sweep.component.css']
})
export class AddCleanSweepComponent implements OnInit {

  cleanSweepNumber: number = 2;

  cityName: string = 'Buffalo';
  countryCode: string = 'US';
  streets: any[] = [];

  date: Date = new Date();
  startTime: Date = new Date();
  endTime: Date = new Date();

  // constructor(private cdRef: ChangeDetectorRef) {
  //   this.addStreet();
  // }
  constructor(ds: DataService) {
  this.addStreet();
  }

  ngOnInit() {
  }
  addStreet() {
    this.streets.push({
      streetName: '',
      streetNumbers: []
    });
  }
  // /**
  //     * Drag Drop Functions
  //     */
  // dragOver = false;
  // onDragEnter($event): void {
  //   // console.log('Dragged Enter', $event);
  //   this.dragOver = true;
  // }
  // onDragLeave($event): void {
  //   // console.log('Dragged Leave', $event);
  //   this.dragOver = false;
  // }
  // onDragOver($event): void {
  //   $event.preventDefault();
  //   // console.log('Dragged Over', $event);
  //   this.dragOver = true;
  // }
  // onDrop($event): any {
  //   // console.log('Dropped', $event);
  //   $event.stopPropagation();
  //   $event.preventDefault();
  //   let fileDropped = $event.dataTransfer.files[0];

  //   //TODO Implement correct event management
  //   this.cdRef.detectChanges();
  //   this.dragOver = false;
  //   console.log('Dropped', 'returning false');

  //   return true;
  // }

  /**
   * Gets the file type from teh File object
   */
  // getFileType(file): string {
  //   return file.type;
  // }

}
