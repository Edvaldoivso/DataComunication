import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './shared/input/input.component';
import { HomeComponent } from './shared/home/home.component';
import { OutputComponent } from './shared/output/output.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    HomeComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
