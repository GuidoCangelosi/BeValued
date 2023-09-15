import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPersonsComponent } from './components/list-persons/list-persons.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPersonsComponent,
    PersonDetailsComponent
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
