import { HttpEventType } from '@angular/common/http';
import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';

@Directive({
  selector: '[AbstractDownloadFile]',
  exportAs: 'AbstractDownloadFile',
})
export abstract class AbstractDownloadFile {
  @Input() source: Observable<any>;

  //#region props

  private _target: string;

  @Input() set target(value: string) {
    this._target = value;
    this.ref.nativeElement.setAttribute('target', value);
  }

  get target() {
    return this._target;
  }

  //#endregion

  //#region publics
  public downloadPercentage: number;
  public isDownloading: boolean;
  //#endregion

  constructor(
    protected ref: ElementRef<HTMLLinkElement>,
    protected toast: ToastrService
  ) {
    this.source = of();
    this._target = '_blank';
    this.ref.nativeElement.setAttribute('target', this.target);
    this.isDownloading = false;
    this.downloadPercentage = 0;
  }

  protected abstract handleFile(file: Blob | null): void;

  @HostListener('click')
  onClick() {
    if (this.isDownloading) return;
    this.isDownloading = true;
    this.source.subscribe({
      next: (event: any) => {
        console.log(event);
        switch (event.type) {
          case HttpEventType.DownloadProgress:
            this.downloadPercentage = 0;
            if (event.total && event.total > 0) {
              this.downloadPercentage = Math.ceil(
                (100 * event.loaded) / event.total
              );
            }
            break;
          case HttpEventType.Response:
            this.handleFile(event.body);
            break;
        }
      },
      complete: () => (this.isDownloading = false),
      error: (message) => {
        console.log(message);
        switch (message.status) {
          case 404:
            this.toast.error(message.error.message);
            break;
          default:
            this.toast.error(
              'Error while downloading file, please try again later'
            );
        }
        this.isDownloading = false;
      },
    });
    return this.isDownloading;
  }

  @HostBinding('class.down-loading') get loading() {
    return this.isDownloading;
  }

  ngOnDestroy(): void {
    this.ref.nativeElement.href &&
      window.URL.revokeObjectURL(this.ref.nativeElement.href);
  }
}
