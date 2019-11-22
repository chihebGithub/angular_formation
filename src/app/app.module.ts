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
import { CVComponent } from './Components/cv/cv.component';
import { ItemComponent } from './Components/item/item.component';
import { DetailComponent } from './Components/detail/detail.component';
import { ListeComponent } from './Components/liste/liste.component';

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    CardComponent,
    PereComponent,
    FilsComponent,
    FilscompComponent,
    PerecompComponent,
    CVComponent,
    ItemComponent,
    DetailComponent,
    ListeComponent
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
