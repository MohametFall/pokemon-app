import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {strongPasswordValidator} from './strong-password.validator';
@Component({
  selector:'login',
  template:`
            <form [formGroup]="form" novalidate
              (ngSubmit)="save(myForm.value,myForm.valid)">
              <div formGroupName="name">
                <input formControlName="firstname" placeHolder="First Name">
                <input formControlName="lastname" placeHolder="Last Name">
              </div>
              <input formControlName="email" placeHolder="Email">
              <div formGroupName="verification">
                <input formControlName="password" placeHolder="Password">
                <input formControlName="passwordConfirm" placeHolder="PassWord Confirmation">
              </div>
              <button>Submit</button>
            </form>
            <p>Value : {{form.value | json}}</p>
            <p>Validation Status : {{form.status}}</p>
            `
})

export class PokemonLoginComponent implements OnInit {
  constructor(private fb:FormBuilder){}
  form:FormGroup;

  ngOnInit():void {
    this.form = this.fb.group({
      name:this.fb.group({
        firstname:['',Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(25)])],
        lastname:['',Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(25)])]
      }),
    email:['',Validators.pattern('^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$')],
    verification:this.fb.group({
      password:['',Validators.compose([Validators.required,Validators.minLength(8)])],
      passwordConfirm:['',Validators.compose([Validators.required,Validators.minLength(8)])]
    },[strongPasswordValidator])

    });

    let person = {
      name:{
          firstname:'Mohamet',
          lastname:'DAUDET'
      },
      email:'mohamet.daudet@gmail.com',
      verification:{
        password:'17Pass_Word$',
        passwordConfirm:'17Pass_Word$'
      }
    };

    this.form.setValue(person);
  }
}
