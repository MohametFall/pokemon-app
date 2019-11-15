import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError, map, tap} from 'rxjs/operators';
import {Pokemon} from './pokemon';
import {POKEMONS} from './mock-pokemons';

@Injectable()
export class PokemonsService{

  constructor(private http:HttpClient){}
  private pokemonsUrl='api/pokemons';
  private isPokemonExist:boolean = false;

  private log(log:string){
    console.info(log);
  }

  private handleError<T>(operation='operation',result?:T){
    return(error:any):Observable<T> =>{
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);

      return Observable.of(result as T);
    }
  }

  getPokemons():Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
      tap(_=>this.log(`fetched pokemons !!`)),
      catchError(this.handleError('getPokemons',[]))
    );
  }

  getPokemon(id:number):Observable<Pokemon>{
    const url = `${this.pokemonsUrl}/${id}`;

    return this.http.get<Pokemon>(url).pipe(
      tap(_=>this.log(`fetched Pokemon id=${id}`)),
      catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
    );
  }

  getPokemonTypes():Array<string> {
    return ['Plante','Feu', 'Eau', 'Insecte','Normal','Electrik',
            'Poison','Fée','Vol','Combat','Psy'];
  }

  isPokemon():boolean{
    return this.isPokemonExist;
  }

  updatePokemon(pokemon:Pokemon):Observable<Pokemon>{
    const httpOptions = {
      headers:new HttpHeaders({'Content-Type':'application/json'})
    };

    return this.http.put(this.pokemonsUrl,pokemon,httpOptions).pipe(
      tap(_=>this.log(`updated pokemon id=${pokemon.id}`)),
      catchError(this.handleError<any>('updatePokemon'))
    );
  }

  deletePokemon(pokemon:Pokemon):Observable<Pokemon>{
    const url = `${this.pokemonsUrl}/${pokemon.id}`;
    const httpOptions = {
      headers:new HttpHeaders({'Content-Type':'application/json'})
    };

    return this.http.delete<Pokemon>(url,httpOptions).pipe(
      tap(_=>this.log(`deleted pokemon id=${pokemon.id}`)),
      catchError(this.handleError<Pokemon>('deletePokemon'))
    );
  }

  searchPokemons(term:string):Observable<Pokemon[]>{
    if(!term.trim()){
      return of([]);
    }

    return this.http.get<Pokemon[]>(`api/pokemons/?nom=${term}`).pipe(
      tap(_=>this.log(`found pokemons matching "${term}"`)),
      catchError(this.handleError<Pokemon[]>('searchPokemons',[]))
    );
  }
}
