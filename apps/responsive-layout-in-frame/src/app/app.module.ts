import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { WithoutFrameModule } from './without-frame/without-frame.module';
import { WithFrameModule } from './with-frame/with-frame.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), WithoutFrameModule, WithFrameModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
