import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule } from '@angular/forms';
import {LoginRoutingModule} from './login-routing.module';
import {PokemonLoginComponent} from './pokemon-login.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule ,
    LoginRoutingModule
  ],
  declarations: [
    PokemonLoginComponent
  ]

})
export class PokemonsLoginModule{}
