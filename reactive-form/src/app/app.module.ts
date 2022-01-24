import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IdentityComponent } from './identity/identity.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyPanelComponent } from './my-panel/my-panel.component';

@NgModule({
  declarations: [AppComponent, IdentityComponent, MyPanelComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
