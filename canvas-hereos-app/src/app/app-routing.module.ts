import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesArrangeComponent } from './heroes-arrange/heroes-arrange.component';
import {WriteStoryComponent} from './write-story/write-story.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'heroes', component: HeroesArrangeComponent},
  { path: 'stories', component: WriteStoryComponent}
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
