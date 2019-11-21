import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})

export class AppareilComponent implements OnInit {

  appareilName = 'appareil';
  appareilstatus='vert';
  color = '' ;
  constructor() { }

  ngOnInit() {
  }
  onclick(){
   this.color=''; 
  }
  test(){
    return 'test';
   }
   goToCv() {
    const link = ['cv'];
    console.log(link);
    }


}
