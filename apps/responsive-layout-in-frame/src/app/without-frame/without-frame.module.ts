import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WithoutFrameRoutingModule } from './without-frame-routing.module';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, WithoutFrameRoutingModule]
})
export class WithoutFrameModule {}
