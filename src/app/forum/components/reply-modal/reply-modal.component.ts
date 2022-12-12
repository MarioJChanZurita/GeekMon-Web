import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

export interface ModalData {
  username: string;
  message: string;
}

@Component({
  selector: 'app-reply-modal',
  templateUrl: './reply-modal.component.html',
})
export class ReplyModalComponent implements OnInit {
  // Form fields

  public message: any;
  public isSubmitted: boolean;
  public isLoading: boolean;

  form = new FormGroup({
    message: new FormControl(''),
  });

  constructor(
    public dialogRef: MatDialogRef<ReplyModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    private formBuilder: FormBuilder
  ) {
    this.isLoading = false;
    this.isSubmitted = false;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      message: ['', [Validators.required]],
    });
  }

  /**
   * Sube el formulario de mensaje
   */
  onSubmit() {
    this.isSubmitted = true;
    this.dialogRef.close(this.formInput['message'].value);
  }

  /**
   * Cierra modal al darle click fuera de su area
   */
  onNoClick(): void {
    this.dialogRef.close();
  }

  /**
   * Permite obtener un campo en especifico del form
   */
  get formInput(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
}
