import { Component, OnInit, Renderer, ViewChildren, QueryList, Output, EventEmitter } from '@angular/core';
import {GetHeroesService} from '../../shared/get-heroes.service';
import {Hero} from './hero.model';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent {
  public heroes: Hero;
  public settings: object;
  public showHereos:boolean = false;
  public resizable:boolean = false;
  public draggable:boolean = false;
  public position:object;
  public indexValue: Array<string> = [];
  public inBounds: boolean;
  public containerId: string;
  @ViewChildren('heroesContainer') heroesContainer: QueryList<any>;
  @Output() onSavedCanvas: EventEmitter<any> = new EventEmitter<any>();

  edge = {
    top: true,
    bottom: true,
    left: true,
    right: true
  };
  constructor(private getHeroesService: GetHeroesService, private renderer: Renderer) { }

  showHeroes() {
    this.getHeroesService.getHeroes()
      .subscribe((data: Hero) =>{
        this.heroes = data;
        this.showHereos = true;
        console.log("this.heroes", this.heroes);
      });
  }
  showSettings() {
    this.getHeroesService.getSettings()
      .subscribe((data: object) =>{
        this.settings = data;
        console.log("this.heroes", this.settings);
      },
      error => {console.log("error", error)});
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
    //event.target.parentNode.style.transform = 'translate(0px, 0px)';
    this.renderer.setElementClass( event.target.parentNode,"showClose", false);
    event.target.parentNode.remove();

    var target = event.target.parentNode;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;

    
    this.heroesContainer.forEach(heroesContainer =>{

      this.containerId = heroesContainer.nativeElement.id;
      if (this.containerId == value){
        heroesContainer.nativeElement.appendChild(target);
      }
    });
  }
  myDragClicked(e){
    e.preventDefault();
    e.stopPropagation();
    e.target.parentNode.style.transform = 'translate(0px, 0px)';
  }

  onSAve(canvas){
    this.onSavedCanvas.emit(canvas);
  }
}