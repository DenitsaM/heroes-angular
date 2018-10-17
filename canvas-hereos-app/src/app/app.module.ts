import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeroesArrangeComponent } from './heroes-arrange/heroes-arrange.component';
import { WriteStoryComponent } from './write-story/write-story.component';
import { HeroesListComponent } from './heroes-arrange/heroes-list/heroes-list.component';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule} from './app-routing.module';
import { AngularDraggableModule } from 'angular2-draggable';
import { DragulaModule } from 'ng2-dragula';


@NgModule({
  declarations: [
    AppComponent,
    HeroesArrangeComponent,
    WriteStoryComponent,
    HeroesListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularDraggableModule,
    DragulaModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
