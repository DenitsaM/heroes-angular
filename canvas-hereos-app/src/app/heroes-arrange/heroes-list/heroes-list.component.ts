import { Component, OnInit, Renderer } from '@angular/core';
import {GetHeroesService} from '../../shared/get-heroes.service';
import {Hero} from './hero.model';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
  public heroes: Hero;
  public showHereos:boolean = false;
  public resizable:boolean = false;
  public draggable:boolean = false;
  public position:object;
  public indexValue: Array<string> = [];

  inBounds: boolean;

  edge = {
    top: true,
    bottom: true,
    left: true,
    right: true
  };
  constructor(private getHeroesService: GetHeroesService, private renderer: Renderer) { }

  ngOnInit() {

  }

  
  showHeroes() {
    this.getHeroesService.getHeroes()
      .subscribe((data: Hero) =>{
        this.heroes = data;
        this.showHereos = true;
        console.log("this.heroes", this.heroes);
      });
  }

  onStart(event) {
    this.inBounds = true;

    console.log("event", event);
    var target = event;
    this.renderer.setElementClass(target,"showClose", true);
  }

  checkEdge(event) {
    this.edge = event;
  }
  resetPosition(event){
    event.target.parentNode.style.transform = 'translate(0px, 0px)';
    this.renderer.setElementClass( event.target.parentNode,"showClose", false);
  }
  myDragClicked(e){
    e.preventDefault();
    e.stopPropagation();
    e.target.parentNode.style.transform = 'translate(0px, 0px)';

  }
}
