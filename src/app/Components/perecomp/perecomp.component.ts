import { Component, OnInit ,EventEmitter, Output,} from '@angular/core';

@Component({
  selector: 'app-perecomp',
  templateUrl: './perecomp.component.html',
  styleUrls: ['./perecomp.component.scss']
})
export class PerecompComponent implements OnInit {

  @Output() valueChange=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  result:any='N/A';
  showValue = (value) =>{
  this.result=value;
console.log(value)
  };

}
