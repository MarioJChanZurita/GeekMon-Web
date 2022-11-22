import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  exports: [
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatPaginatorModule,
  ],
})
export class MaterialModule {}
