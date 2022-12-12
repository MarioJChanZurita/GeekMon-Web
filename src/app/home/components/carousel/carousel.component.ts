import {
  Component,
  HostListener,
  ViewChild,
  ElementRef,
  OnInit,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @Input('items') arr: any[] = [];

  totalCards: number = 20;
  currentPage: number = 1;
  pagePosition: string = '0%';

  cardsPerPage: number = 0;
  totalPages: number = 0;
  overflowWidth: string = '';
  cardWidth: string = '';
  containerWidth: number = 0;

  @ViewChild('container', { static: true, read: ElementRef })
  container!: ElementRef;

  @HostListener('window:resize') windowResize() {
    let newCardsPerPage = this.getCardsPerPage();
    if (newCardsPerPage != this.cardsPerPage) {
      this.cardsPerPage = newCardsPerPage;
      this.initializeSlider();
      if (this.currentPage > this.totalPages) {
        this.currentPage = this.totalPages;
        this.populatePagePosition();
      }
    }
  }

  constructor() {}

  ngOnInit() {
    console.log(this.arr.length);
    this.cardsPerPage = this.getCardsPerPage();
    this.initializeSlider();
  }

  /**
   * Inicializa los datos para el funcionamiento del carousel
   */
  initializeSlider() {
    this.totalPages = Math.ceil(this.totalCards / this.cardsPerPage);
    this.overflowWidth = `calc(${this.totalPages * 100}% + ${
      this.totalPages * 10
    }px)`;
    this.cardWidth = `calc((${100 / this.totalPages}% - ${
      this.cardsPerPage * 10
    }px) / ${this.cardsPerPage})`;

    console.log('total cards', this.totalCards);
  }

  /**
   * Obtiene numero de cartas por pagina
   */
  getCardsPerPage() {
    return Math.floor(this.container.nativeElement.offsetWidth / 200);
  }

  /**
   * Cambia pagina a la siguiente
   */
  changePage(incrementor: number) {
    this.currentPage += incrementor;
    this.populatePagePosition();
  }

  /**
   * Rellena posicion de pagina
   */
  populatePagePosition() {
    this.pagePosition = `calc(${-100 * (this.currentPage - 1)}% - ${
      10 * (this.currentPage - 1)
    }px)`;
  }
}
