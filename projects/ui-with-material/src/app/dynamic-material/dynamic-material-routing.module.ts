import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialSelectorComponent } from './material-selector/material-selector.component';

export const routes: Routes = [
  { path: '', component: MaterialSelectorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicMaterialRoutingModule { }
