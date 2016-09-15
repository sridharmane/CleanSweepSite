import { Component } from '@angular/core';

@Component({
  selector: 'app-overlay-spinner',
  template: `<md-card class="card-overlay">
                <md-progress-circle mode="indeterminate" class="spinner"></md-progress-circle>
            </md-card>`,
  styleUrls: ['./overlay-spinner.component.scss'],
  
})
export class OverlaySpinnerComponent {

  constructor() { }

}
