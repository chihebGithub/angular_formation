import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filscomp',
  templateUrl: './filscomp.component.html',
  styleUrls: ['./filscomp.component.scss']
})
export class FilscompComponent implements OnInit {

  myFavoriteColor :string = 'test envoi fils vers pere ';
  @Output() valueChange=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  changecolor(){
    console.log(this.myFavoriteColor)
    this.valueChange.emit(
    this.myFavoriteColor
   
    );
    }

}
