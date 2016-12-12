
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { PipesModule } from '../../pipes';

import { CleanSweepDashboard } from './dashboard';
import { CleanSweepsComponent } from './clean-sweeps.component';
import { AddCleanSweepComponent } from './add-clean-sweep/add-clean-sweep.component';
import { EditCleanSweepComponent } from './edit-clean-sweep/edit-clean-sweep.component';
import { ListCleanSweepsComponent } from './list-clean-sweeps/list-clean-sweeps.component';
import { DetailCleanSweepComponent } from './detail-clean-sweep/detail-clean-sweep.component';





// Route Configuration
const cleanSweepsRoutes: Routes = [
    {
        path: '',
        component: CleanSweepsComponent,
        children: [
            { path: 'dash', component: CleanSweepDashboard },
            { path: 'dashboard', component: CleanSweepDashboard },
            { path: 'list', component: ListCleanSweepsComponent },
            { path: 'add', component: AddCleanSweepComponent },
            { path: ':id/detail', component: DetailCleanSweepComponent },
            { path: ':id/edit', component: EditCleanSweepComponent }
        ]
    },

];


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MaterialModule,
        PipesModule,
        RouterModule.forChild(cleanSweepsRoutes)
    ],
    declarations: [
        CleanSweepDashboard,
        CleanSweepsComponent,
        AddCleanSweepComponent,
        DetailCleanSweepComponent,
        EditCleanSweepComponent,
        ListCleanSweepsComponent
    ],
    entryComponents: [
        CleanSweepDashboard,
        CleanSweepsComponent,
        AddCleanSweepComponent,
        DetailCleanSweepComponent,
        EditCleanSweepComponent,
        ListCleanSweepsComponent
    ],
    providers: [],
    exports: [
        CleanSweepDashboard,
        CleanSweepsComponent,
        AddCleanSweepComponent,
        DetailCleanSweepComponent,
        EditCleanSweepComponent,
        ListCleanSweepsComponent
    ]
})
export class CleanSweepsModule { };
