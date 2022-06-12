import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CoreModule } from './core/core.module';
import { ZtzyrantComponent } from './ztzyrant/ztzyrant.component';

@NgModule({ // Deklarasi untuk app disini
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    ZtzyrantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
