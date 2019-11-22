import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from 'src/app/Models/Personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
@Input() item:Personne;
@Output() valueEmitter=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  emitPersone(){
   
    this.valueEmitter.emit(
     this.item
    );
//console.log(this.item)
    }

}
