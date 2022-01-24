import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'my-panel',
  templateUrl: './my-panel.component.html',
  styleUrls: ['./my-panel.component.css'],
})
export class MyPanelComponent implements OnInit {
  myFormGroup: FormGroup;
  constructor() {}

  ngOnInit(): void {}

  @Input()
  set customFG(customFG: FormGroup) {
    console.log(customFG);
    //this.myFormGroup = customFG;
  }
}
