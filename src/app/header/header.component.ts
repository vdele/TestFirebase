import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  isAuth: boolean;
  displayName: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if(user) {
          this.isAuth = true;
          this.displayName = user.displayName;
        } else {
          this.isAuth = false;
          this.displayName = null;
        }
      }
    );
   
  }

  onSignOut() {
    this.authService.signOutUser();
  }
  getUserInfo() {
    this.authService.getUserInfo();
  }
}
