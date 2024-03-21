import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrameComponent } from './components/frame/frame.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardCssGridComponent } from './components/dashboard-css-grid/dashboard-css-grid.component';

@NgModule({
  declarations: [FrameComponent, DashboardComponent, DashboardCssGridComponent],
  imports: [CommonModule],
  exports: [FrameComponent, DashboardComponent]
})
export class SharedModule {}
