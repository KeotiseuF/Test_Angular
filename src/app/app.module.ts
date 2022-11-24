import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoverPageComponent } from './cover-page/cover-page.component';
import { PresentationPageComponent } from './presentation-page/presentation-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CoverPageComponent,
    PresentationPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
