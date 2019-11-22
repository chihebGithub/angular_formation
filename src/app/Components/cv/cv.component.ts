import { Component, OnInit, Input } from '@angular/core';
import { Personne } from 'src/app/Models/Personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})

export class CVComponent implements OnInit {
   personnes: Personne [];
   @Input() item:any;
  constructor() { }
  ngOnInit() {

    let p1 =new Personne(2,'chiheb','rabeh',27,'rotating_card_thumb2.png',12345678,'developper');
 let p2 =new Personne(2,'ghazi','bouslema',27,'rotating_card_thumb2.png',12345678,'developper');
  this.personnes =[p1,p2];

  }
  ecouterPersoneCV(value){
     this.item=value
     console.log('in cv',this.item)

    }

}
