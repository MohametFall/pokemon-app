import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  isLoggedIn:boolean = false;
  redirectUrl:string;

  login(name:string, password:string):Observable<boolean>{
    let isLoggedIn = (name==='admin' && password==='admin');

    return Observable.of(true).delay(1000)
      .do(val=>this.isLoggedIn = isLoggedIn);
  }

  logout():void {
    this.isLoggedIn = false;
  }
}
