import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PokemonLoginComponent} from './pokemon-login.component';


const loginRoutes:Routes = [
  {path:'login', component:PokemonLoginComponent}
];

@NgModule({
  imports:[
    RouterModule.forChild(loginRoutes)
  ],
  exports:[
    RouterModule
  ]
})

export class LoginRoutingModule{}
