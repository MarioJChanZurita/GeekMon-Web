import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-digivice',
  templateUrl: './digivice.component.html',
  styleUrls: ['./digivice.component.css'],
})
export class DigiviceComponent implements OnInit {
  subsDigimons!: Subscription;
  digimons: any[] = [];
  isLoading: boolean = true;

  noPages: number = 0;
  limitPerPage: number = 24;

  nextPage: string = '';
  previousPage: string = '';

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.subsDigimons = this.sharedService
      .getDigimons(this.limitPerPage)
      .subscribe({
        next: ({ content, pageable }) => {
          this.noPages = Math.ceil(pageable.totalElements / this.limitPerPage);
          this.nextPage = pageable.nextPage;
          this.previousPage = pageable.previousPage;
          for (let digimon of content) {
            this.getDigimonDetails(digimon.href);
          }
          this.isLoading = false;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  getDigimons(noPage: string) {
    this.subsDigimons && this.subsDigimons.unsubscribe();
    this.sharedService.getDigimonsByUrl(noPage).subscribe({
      next: ({ content, pageable }) => {
        this.nextPage = pageable.nextPage;
        this.previousPage = pageable.previousPage;
        for (let digimon of content) {
          this.getDigimonDetails(digimon.href);
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getDigimonsByUrl(url: string) {
    this.subsDigimons && this.subsDigimons.unsubscribe();
    this.sharedService
      .getDigimonsByUrl(`${url}&pageSize=${this.limitPerPage}`)
      .subscribe({
        next: ({ content, pageable }) => {
          this.nextPage = pageable.nextPage;
          this.previousPage = pageable.previousPage;
          for (let digimon of content) {
            this.getDigimonDetails(digimon.href);
          }
          this.isLoading = false;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  getDigimonDetails(url: any) {
    this.sharedService.getDigimonsByUrl(url).subscribe({
      next: ({ id, name, images }) => {
        this.digimons.push({
          id: id,
          name: name,
          image: images[0].href,
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  changePage(pageUrl: string) {
    this.digimons = [];
    this.getDigimonsByUrl(pageUrl);
  }
}
