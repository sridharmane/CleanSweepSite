// Imports

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCleanSweepComponent }    from './add-clean-sweep';
import { EditCleanSweepComponent }    from './edit-clean-sweep';
import { DetailCleanSweepComponent }    from './detail-clean-sweep';
import { ListCleanSweepsComponent }    from './list-clean-sweeps';

// Route Configuration
export const cleanSweepsRoutes: Routes = [
    { path: 'cleansweeps', component: ListCleanSweepsComponent },
    { path: 'cleansweeps/add', component: AddCleanSweepComponent },
    { path: 'cleansweeps/:id', component: DetailCleanSweepComponent },
    { path: 'cleansweeps/:id/edit', component: EditCleanSweepComponent }
];

export const cleanSweepsRouting: ModuleWithProviders = RouterModule.forChild(cleanSweepsRoutes);
