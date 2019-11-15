import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import {AppRoutingModule} from './app-routing.module';
import {PokemonsModule} from './pokemons/pokemons.module';
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './page-not-found.component';
import {LoginRoutingModule} from './login-routing.module';

@NgModule({
  imports: [
            BrowserModule,
            FormsModule,
            PokemonsModule,
            LoginRoutingModule,
            AppRoutingModule,
            HttpClientModule,
            HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,
            {dataEncapsulation:false})
          ],
  declarations:[
                AppComponent,
                LoginComponent,
                PageNotFoundComponent
              ],
  bootstrap: [AppComponent]
})
export class AppModule{}
