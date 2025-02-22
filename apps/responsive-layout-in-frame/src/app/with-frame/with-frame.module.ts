import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WithFrameRoutingModule } from './with-frame-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, WithFrameRoutingModule, SharedModule]
})
export class WithFrameModule {}
