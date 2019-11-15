import {Component, OnInit} from '@angular/core';
import {Pokemon} from './pokemon';
import {POKEMONS} from './mock-pokemons';
import {Router} from '@angular/router';
import {PokemonsService} from './pokemons.service';

@Component({
  selector:'list-pokemon',
  templateUrl:'./app/pokemons/list-pokemon.component.html'
})
export class ListPokemonComponent implements OnInit {
  pokemons: Pokemon[]= null;
  constructor(private router: Router,private pokemonsService:PokemonsService){}
  ngOnInit(){
    //this.pokemons = POKEMONS;
    this.getPokemons();
    console.log('NgOnInit !!!');
  }

  selectPokemon( pokemon: Pokemon):void{
    console.log("Vous avez selectionné "+pokemon.nom);
    let link = ['pokemon',pokemon.id];
    this.router.navigate(link);
  }

  getPokemons():void{
    this.pokemonsService.getPokemons()
    .subscribe(pokemons=>this.pokemons = pokemons);
  }
}
