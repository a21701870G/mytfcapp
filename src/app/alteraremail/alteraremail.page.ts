import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FireAuthService} from '../fire-auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-alteraremail',
  templateUrl: './alteraremail.page.html',
  styleUrls: ['./alteraremail.page.scss'],
})
export class AlteraremailPage implements OnInit {
  public validationsForm: FormGroup;
  public errorMessage = '';
  public validationMessages = {
    email: [
      {type: 'required', message: 'Email is required.'},
      {type: 'pattern', message: 'Please enter a valid email.'}
    ]
  };

  public back() {
    this.location.back();
  }
  constructor(private location: Location, private formBuilder: FormBuilder,
              private router: Router, private authService: FireAuthService) { }

  public ngOnInit(): void {
    this.validationsForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }
  public async tryLogin(value: { email: string, password: string }):
      Promise<void> {
    return await this.authService.doLogin(value)
        .then(res => {
          this.router.navigate(['/home']);
        }, err => {
          this.errorMessage = err.message;
          console.log(err);
        });
  }
}
