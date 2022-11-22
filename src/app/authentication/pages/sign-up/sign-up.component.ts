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
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, of, throwError } from 'rxjs';
// import { AppCurrentService } from 'src/app.current.service';
import { Md5 } from 'ts-md5';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  // Form fields
  public username: FormControl;
  public password: FormControl;
  public confirmPassword: FormControl;

  public hashedPassword: any;
  public isSubmitted: boolean;
  public isLoading: boolean;

  form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  constructor(
    private authService: AuthService,
    // private appCurrent: AppCurrentService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.username = new FormControl();
    this.password = new FormControl();
    this.confirmPassword = new FormControl();

    this.isSubmitted = false;
    this.isLoading = false;
    this.hashedPassword = '';
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        username: ['', [Validators.required, Validators.email]],
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

    this.authService
      .register(this.formInput['username'].value, this.hashedPassword)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.onReset();
          this.toastr.error(err.message, 'Error');
          return throwError(() => err);
        })
      )
      .subscribe({
        next: () => {
          this.isLoading = false;
          // this.router.navigate(['/auth/login']);
        },
      });
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
