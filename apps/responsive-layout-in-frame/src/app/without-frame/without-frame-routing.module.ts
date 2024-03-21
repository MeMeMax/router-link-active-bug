import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from '../shared/components/dashboard/dashboard.component';
import { DashboardCssGridComponent } from '../shared/components/dashboard-css-grid/dashboard-css-grid.component';

const routes: Routes = [
  {
    path: 'without-frame',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'container-queries/dashboard', pathMatch: 'full' },
      { path: 'container-queries/dashboard', component: DashboardComponent },
      { path: 'css-grid/dashboard', component: DashboardCssGridComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WithoutFrameRoutingModule {}
