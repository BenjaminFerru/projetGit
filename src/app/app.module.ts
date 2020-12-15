import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FormsModule } from '@angular/forms';
import { AsideCompComponent } from './component/aside-comp/aside-comp.component';
import { ContentComponent } from './component/content/content.component';
import { ServiceService } from './service.service';

@NgModule({
  //déclaration des composants
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideCompComponent,
    ContentComponent,
    ServiceService
  ],
  //importation des outils
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
