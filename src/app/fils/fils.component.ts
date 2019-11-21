import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.scss']
})
export class FilsComponent implements OnInit {

  @Input() appareilName: string="test pere fils";
  @Input() appareilStatus: string;
  @Input() color :string ='pas de passage par defaut';

  constructor() { }

  ngOnInit() {
  }

}
