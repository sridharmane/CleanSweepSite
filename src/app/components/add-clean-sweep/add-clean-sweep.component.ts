import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-add-clean-sweep',
  templateUrl: './add-clean-sweep.component.html',
  styleUrls: ['add-clean-sweep.component.scss']
})
export class AddCleanSweepComponent implements OnInit {

  cleanSweepNumber: number = 2;

  cityName: string = 'Buffalo';
  countryCode: string = 'US';
  streets: any[] = [];

  date: Date = new Date();
  startTime: Date = new Date();
  endTime: Date = new Date();

  constructor(@Inject(DataService) ds: DataService) {
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
