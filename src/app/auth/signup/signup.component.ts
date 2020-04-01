import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {
  
  model: any = {};

  errorMessage: string;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }
  
  onSubmit() {
    this.authService.createNewUser(this.model.email,this.model.password,this.model.firstName + " " + this.model.firstName).then(
      (user) => {
        this.router.navigate(['/books']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }



}
