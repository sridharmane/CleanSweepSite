import { Component} from '@angular/core';

import 'hammerjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'
  ]
})


export class AppComponent {
  title = 'Home';
  streetAddresses: Array<any>;

  // cleanSweep: Array<CleanSweep>;
  constructor() {

  }
}
