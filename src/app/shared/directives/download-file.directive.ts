import { Directive, ElementRef } from '@angular/core';
import { AbstractDownloadFile } from './abstract-download-file.directive';
import { ToastrService } from 'ngx-toastr';

@Directive({
  selector: '[DownloadFile]',
  exportAs: 'DownloadFile',
})
export class DownloadFile extends AbstractDownloadFile {
  constructor(
    protected override ref: ElementRef<HTMLLinkElement>,
    protected override toast: ToastrService
  ) {
    super(ref, toast);
  }

  protected handleFile(file: Blob | null): void {
    console.log('file', file);
    window.URL.revokeObjectURL(this.ref.nativeElement.href);
    if (file == null) return;
    this.ref.nativeElement.href &&
      window.URL.revokeObjectURL(this.ref.nativeElement.href);
    this.ref.nativeElement.href = window.URL.createObjectURL(file);
    this.ref.nativeElement.click();
  }
}
