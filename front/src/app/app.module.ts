import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ServerComponent } from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import {ServersService} from "./servers.service";

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    FormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
