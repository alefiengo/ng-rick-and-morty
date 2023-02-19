import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListCharactersComponent } from './components/list-characters/list-characters.component';
import { MessagesComponent } from './components/messages/messages.component';
import { CardCharacterComponent } from './components/card-character/card-character.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCharactersComponent,
    MessagesComponent,
    CardCharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
