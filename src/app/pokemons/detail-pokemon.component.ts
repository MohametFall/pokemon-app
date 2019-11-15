import {Component, OnInit} from '@angular/core';
import {ActivatedRoute,Router,Params} from '@angular/router';
import {Pokemon} from './pokemon';
import {PokemonsService} from './pokemons.service';

@Component({
  selector:'detail-pokemon',
  templateUrl:'./app/pokemons/detail-pokemon.component.html'
})

export class DetailPokemonComponent implements OnInit {
  pokemon:Pokemon = null;


  constructor(private route:ActivatedRoute,
              private router:Router,
              private pokemonsService:PokemonsService){}

  ngOnInit():void {
    let id = +this.route.snapshot.params['id'];
    this.pokemonsService.getPokemon(id)
    .subscribe(pokemon => this.pokemon = pokemon);
  }

  goBack():void {
    this.router.navigate(['/pokemon/all']);
  }

  goEdit(pokemon:Pokemon):void{
    let link = ['/pokemon/edit', pokemon.id];
    this.router.navigate(link);
  }

  delete(pokemon:Pokemon):void{
    alert('Etes-vous sur de vouloir supprimer '+pokemon.nom);
    this.pokemonsService.deletePokemon(pokemon)
    .subscribe(_=>this.backToList());
  }

  backToList():void{
    let link = ['pokemon/all'];
    this.router.navigate(link);
  }
}
