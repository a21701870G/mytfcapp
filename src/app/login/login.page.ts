import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {FireAuthService} from '../fire-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public validationsForm: FormGroup;
  public errorMessage = '';
  public validationMessages = {
    email: [
      {type: 'required', message: 'Campo por preencher.'},
      {type: 'pattern', message: 'Por favor insira um mail valido.'}
    ],
    password: [
      {type: 'required', message: 'Campo por preencher.'},
      {type: 'minlength', message: 'Palavra-passe tem de ter pelo menos 5 caracteres'}
    ]
  };

  constructor(
      private authService: FireAuthService,
      private formBuilder: FormBuilder,
      private router: Router
  ) {
  }

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

  public async tryLogin(value: { email: string, password: string }): Promise<void> {
    return await this.authService.doLogin(value)
        .then(res => {
          this.router.navigate(['/tabs']);
        }, err => {
          this.errorMessage = err.message;
          console.log(err);
        });
  }

  public goRegisterPage(): void {
    this.router.navigate(['/register']);
  }

}
