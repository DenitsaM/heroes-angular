import { Component, ViewChild, ElementRef, Renderer } from '@angular/core';
import * as html2canvas from "html2canvas"

@Component({
  selector: 'app-heroes-arrange',
  templateUrl: './heroes-arrange.component.html',
  styleUrls: ['./heroes-arrange.component.css']
})
export class HeroesArrangeComponent {

  @ViewChild('savedImages') savedImages: ElementRef;
  constructor(private renderer: Renderer) { }

  onSAve(event) {
    var self = this;
    //event.target.parentNode.style.width = '600px';
    //event.target.parentNode.style.height = '335px';
    html2canvas(event.target.parentNode,
    {
      scale: 600/ 1200,
    })
      .then((canvas) => {
        self.savedImages.nativeElement.appendChild(canvas);
        console.log("canvas", canvas);
      })
      .catch(err => {
        console.log("error canvas", err);
      });
    /*setTimeout(
      function () {
        
          event.target.parentNode.style.width = '1200px';
          event.target.parentNode.style.height = '670px';
          console.log("event", event.target.parentNode);
      }, 500);*/
      
  }
}
