// import { Component, OnInit, trigger} from '@angular/core';
import { Component, OnInit, trigger, state, transition, style, group, animate } from '@angular/core';
import { CleanSweepEventData } from '../../types/clean-sweep-event-data';

@Component({
  selector: 'app-clean-sweeps',
  templateUrl: 'clean-sweeps.component.html',
  styleUrls: ['clean-sweeps.component.scss'],
  animations: [
    trigger('showHideTrigger', [
      state('in', style({ height: '*' })),
      transition('void => *', [
        style({ height: '0', opacity: 0 }),
        animate(200, style({ height: '*', opacity: 1 }))
      ]),
      transition('* => void', [
        style({ height: '*', opacity: 1 }),
        animate(200, style({ height: 0, opacity: 0 }))
      ])
    ])
  ]
})
export class CleanSweepsComponent implements OnInit {
  showAddNew = false;
  showEdit = false;

  constructor() { }

  ngOnInit() {
  }
  eventsReceived(eventData: CleanSweepEventData) {
    switch (eventData.component) {
      case 'addCleanSweepComponent':
        this.showAddNew = eventData.visible;
        break;
      case 'editCleanSweepComponent':
        this.showEdit = eventData.visible;
        break;
    }

  }

}
