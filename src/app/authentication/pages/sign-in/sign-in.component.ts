import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';
import { AppService } from 'src/app.service';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  public username: FormControl;
  public password: FormControl;
  public hashedPassword: any;
  public isSubmitted: boolean;
  public isLoading: boolean;

  form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private appService: AppService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.username = new FormControl();
    this.password = new FormControl();
    this.hashedPassword = '';
    this.isSubmitted = false;
    this.isLoading = false;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  get formInput(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  /**
   * Envia formulario de login
   */
  onSubmit(): void {
    this.isSubmitted = true;
    if (this.form.invalid) return;
    this.isLoading = true;
    const md5 = new Md5();
    this.hashedPassword = md5
      .appendStr(this.formInput['password'].value.trim())
      .end();

    this.appService
      .authenticate(this.formInput['username'].value, this.hashedPassword)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.onReset();
          this.toastr.warning('Bad credentials', 'Error');
          return throwError(() => err);
        })
      )
      .subscribe({
        next: (res) => {
          this.isLoading = false;
          this.appService.redirectToHome(); // intenta nuevamente -> AuthGuard
        },
      });
  }

  /**
   * Limpia los campos de formulario de login
   */
  onReset(): void {
    this.isSubmitted = false;
    this.form.reset();
  }
}
