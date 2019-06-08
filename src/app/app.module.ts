import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UnitestPipePipe } from './unitest-pipe.pipe';
import { UnitTestDireciveDirective } from './unit-test-direcive.directive';

@NgModule({
  declarations: [
    AppComponent,
    UnitestPipePipe,
    UnitTestDireciveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
