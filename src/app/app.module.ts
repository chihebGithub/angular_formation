import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { CardComponent } from './card/card.component';
import { PereComponent } from './pere/pere.component';
import { FilsComponent } from './fils/fils.component';
import { FilscompComponent } from './Components/filscomp/filscomp.component';
import { PerecompComponent } from './Components/perecomp/perecomp.component';

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    CardComponent,
    PereComponent,
    FilsComponent,
    FilscompComponent,
    PerecompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
