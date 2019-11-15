import {Component,OnInit} from '@angular/core';
import {AuthService} from './auth.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector:'pokemon-app',
  templateUrl:'./app/app.component.html'
})
export class AppComponent implements OnInit{
  constructor(
    private authService:AuthService,
    private router:Router){}
    isLogged:boolean;

    ngOnInit():void {
      this.isLogged = this.authService.isLoggedIn;
    }

    logout():void {
      alert('Vous etes sur le point de vous déconnecter !!');
      this.authService.isLoggedIn = false;
      let link = ['login'];
      this.router.navigate(link);
      console.info('Déconnecté !!!'+this.isLogged);
    }
}
