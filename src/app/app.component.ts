import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'TestFirebase';

  constructor() {
    firebase.initializeApp(environment.firebase);
  }
}
