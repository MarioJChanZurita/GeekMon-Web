import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { catchError, of, throwError } from 'rxjs';
// import { AppCurrentService } from 'src/app.current.service';
import { Md5 } from 'ts-md5';
// import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  // Form fields
  public emailAddress: FormControl;
  public name: FormControl;
  public password: FormControl;
  public confirmPassword: FormControl;

  public hashedPassword: any;
  public isSubmitted: boolean;
  public isLoading: boolean;

  form = new FormGroup({
    emailAddress: new FormControl(''),
    name: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  constructor(
    // private authService: AuthenticationService,
    // private appCurrent: AppCurrentService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.emailAddress = new FormControl();
    this.name = new FormControl();
    this.password = new FormControl();
    this.confirmPassword = new FormControl();

    this.isSubmitted = false;
    this.isLoading = false;
    this.hashedPassword = '';
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        emailAddress: ['', [Validators.required, Validators.email]],
        name: ['', [Validators.minLength(8), Validators.maxLength(20)]],
        password: ['', [Validators.minLength(8), Validators.maxLength(20)]],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validators: [this.validatePassword('password', 'confirmPassword')],
      }
    );
  }

  get formInput(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.isSubmitted = true;
    if (this.form.invalid) return;
    this.isLoading = true;
    const md5 = new Md5();
    this.hashedPassword = md5
      .appendStr(this.formInput['password'].value.trim())
      .end();

    // this.appCurrent
    //   .register({
    //     email: this.formInput['emailAddress'].value,
    //     name: this.formInput['name'].value,
    //     password: this.hashedPassword,
    //   })
    //   .pipe(
    //     catchError((err: HttpErrorResponse) => {
    //       this.onReset();
    //       this.toastr.error(err.message, 'Error');
    //       return throwError(() => err);
    //     })
    //   )
    //   .subscribe({
    //     next: () => {
    //       this.isLoading = false;
    //       this.appCurrent.redirectToLogin();
    //     },
    //   });
  }

  onReset(): void {
    this.isSubmitted = false;
    this.form.reset();
  }

  validatePassword(controlName: string, checkControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const checkControl = controls.get(checkControlName);
      if (checkControl?.errors && !checkControl.errors['matching']) {
        return null;
      }
      if (control?.value !== checkControl?.value) {
        controls.get(checkControlName)?.setErrors({ matching: true });
        return { matching: true };
      } else {
        return null;
      }
    };
  }
}
