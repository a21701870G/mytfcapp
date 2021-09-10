import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {FireAuthService} from '../fire-auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    public validationsForm: FormGroup;
    public errorMessage = '';
    public successMessage = '';
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

    public tryRegister(value: { email: string, password: string }): void {
        this.authService.doRegister(value)
            .then(res => {
                console.log(res);
                this.errorMessage = '';
                this.successMessage = 'Your account has been created. Please log in.';
            }, err => {
                console.log(err);
                this.errorMessage = err.message;
                this.successMessage = '';
            });
    }

    public goLoginPage(): void {
        this.router.navigate(['/login']);
    }

}
