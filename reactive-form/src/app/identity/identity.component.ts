import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.css'],
})
export class IdentityComponent implements OnInit {
  identityForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.identityForm = new FormGroup({
      companyData: new FormGroup({
        name: new FormControl(null, Validators.required),
        code: new FormControl(null, Validators.required),
        abbreviation: new FormControl(null, Validators.required),
      }),

      siret: new FormControl(null, Validators.required),
      tva: new FormControl(null, Validators.required),
      type: new FormControl(null, Validators.required),
      additionalInfo: new FormArray([]),
    });
  }

  onIndentitySubmit() {
    console.log(this.identityForm);
  }

  addInfoSupplementaire() {
    // const control = new FormControl([null, Validators.min, Validators.max]);
    const controls = new FormGroup({
      control1: new FormControl(null),
      control2: new FormControl(null),
    });
    (<FormArray>this.identityForm.get('additionalInfo')).push(controls);
  }
}
