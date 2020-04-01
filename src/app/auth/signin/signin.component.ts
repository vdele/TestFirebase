import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.less']
})
export class SigninComponent implements OnInit {

  model: any = {};

  errorMessage: string;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }
  
  onSubmit() {
    this.authService.signInUser(this.model.email,this.model.password).then(
      () => {
        this.router.navigate(['/books']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

}
