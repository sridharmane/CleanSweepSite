// Imports

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CleanSweepsComponent }    from './';
import { AddCleanSweepComponent }    from './add-clean-sweep';
import { EditCleanSweepComponent }    from './edit-clean-sweep';
import { DetailCleanSweepComponent }    from './detail-clean-sweep';
import { ListCleanSweepsComponent }    from './list-clean-sweeps';

// Route Configuration
export const cleanSweepsRoutes: Routes = [
    {
        path: '',
        component: CleanSweepsComponent,
        redirectTo: 'list',
        pathMatch: 'full',
        children: [
            { path: 'list', component: ListCleanSweepsComponent },
            { path: 'add', component: AddCleanSweepComponent },
            { path: ':id', component: DetailCleanSweepComponent },
            { path: ':id/edit', component: EditCleanSweepComponent }
        ]
    },

];

export const cleanSweepsRouting: ModuleWithProviders = RouterModule.forChild(cleanSweepsRoutes);
