import { cleanSweepsRouting } from './clean-sweeps.routes';

import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { AddCleanSweepComponent }    from './add-clean-sweep';
import { EditCleanSweepComponent }    from './edit-clean-sweep';
import { DetailCleanSweepComponent }    from './detail-clean-sweep';
import { ListCleanSweepsComponent }    from './list-clean-sweeps';

import { CleanSweepsService } from './clean-sweeps.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    cleanSweepsRouting
  ],
  declarations: [
    AddCleanSweepComponent,
    EditCleanSweepComponent,
    DetailCleanSweepComponent,
    ListCleanSweepsComponent
  ],
  providers: [
    CleanSweepsService
  ]
})
export class CleanSweepsModule {}