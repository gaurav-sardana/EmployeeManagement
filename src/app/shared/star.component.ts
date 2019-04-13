import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
    selector : 'app-star',
    templateUrl : './star.component.html',
    styleUrls : ['./star.component.css']
})
export class StarComponent implements OnChanges{
starWidth : number ;
@Input() rating : number;
@Output() recievedStar : EventEmitter<string> = new EventEmitter<string>();

ngOnChanges(): void{
    this.starWidth = this.rating * 75/5; 
}
onStarsClicked() : void{
    console.log(`The Rating  ${this.rating} was clicked!`);
    this.recievedStar.emit(`The Rating  ${this.rating} was clicked!`);
}
}