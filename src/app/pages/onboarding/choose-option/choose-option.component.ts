import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-option',
  templateUrl: './choose-option.component.html',
  styleUrls: ['./choose-option.component.css']
})
export class ChooseOptionComponent implements OnInit {

  option = 1;
  
  constructor() { }

  ngOnInit(): void {
  }

}
