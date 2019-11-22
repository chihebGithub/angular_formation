import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from 'src/app/Models/Personne';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {
@Input() personnes:Personne [];
@Output() listner=new EventEmitter();
@Input() result:any='N/A';
  constructor() { }

  ngOnInit() {
  }

  onEcout(value){
   this.result=value
   this.listner.emit(
    this.result
   );
  }
 

}
