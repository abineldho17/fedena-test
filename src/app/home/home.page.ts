import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
loginUserData = {
  client_id: '',
    client_secret: '',
    grant_type: '',
    redirect_url: '',
};

  constructor(private _auth: AuthService,private route: Router) {}
ngOnInit() {}



loginUser(){
  
  this._auth.loginUser(this.loginUserData)
  .subscribe(
    res => console.log(res),
    err => console.log(err)
    
  )

}
}

