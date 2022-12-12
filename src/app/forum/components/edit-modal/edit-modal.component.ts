import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';

export interface ModalData {
  username: string;
  message: string;
  id: string;
}

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css'],
})
export class EditModalComponent implements OnInit {
  // Form fields

  public message: any;
  public isSubmitted: boolean;
  public isLoading: boolean;

  form = new FormGroup({
    message: new FormControl(this.data.message),
  });

  constructor(
    public dialogRef: MatDialogRef<EditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData
  ) {
    this.isLoading = false;
    this.isSubmitted = false;
  }

  ngOnInit(): void {}

  /**
   * Sube el formulario de mensaje
   */
  onSubmit() {
    this.isSubmitted = true;
    this.dialogRef.close({
      id: this.data.id,
      message: this.formInput['message'].value,
    });
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
