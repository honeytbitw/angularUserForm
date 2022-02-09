import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Users } from '../models/users.model';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  myForm :FormGroup;

  userDetail:Users[] = []

  options= [
    'Male',
    'Female',
    'Other'
  ];

  department = [
    'IT',
    'Marketing',
    'Accounts',
    'HR'
  ];
  constructor(
    private fb: FormBuilder
  ) { 
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName:  ['', [Validators.required]],
      email:  ['', [Validators.required], [Validators.email]],
      phoneNumber:  ['', [Validators.required,
                        Validators.minLength(10), 
                        Validators.maxLength(10),
                        Validators.pattern('^[0-9]*$')
                      ]],
      gender:  ['', [Validators.required]],
      date: ['', [Validators.required]],
      department:  ['', [Validators.required]],
      agree:  [true, [Validators.requiredTrue]],

    })
    this.myForm.valueChanges.subscribe(res => {

    })
  }
  ngOnInit(): void {
  }

  get firstName(){
    return this.myForm.get('firstName')
  }
  get lastName(){
    return this.myForm.get('lastName')
  }
  get email(){
    return this.myForm.get('email')
  }
  get phoneNumber(){
    return this.myForm.get('phoneNumber')
  }
  get date(){
    return this.myForm.get('date')
  }
  get depart(){
    return this.myForm.get('department')
  }

  get agree(){
    return this.myForm.get('agree')
  }
  
  onSubmit(){
    this.userDetail.push(this.myForm.value)
    console.log(this.userDetail)


    this.myForm.reset()
  }

}
