import { Component, OnInit, Input } from '@angular/core';
import { Personne } from 'src/app/Models/Personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
 @Input() personne: Personne
  constructor() { }

  ngOnInit() {
  }

}
