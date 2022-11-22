import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginator',
})
export class PaginatorPipe implements PipeTransform {
  transform(items: any[], pageIndex: number, itemsByPage: number): any[] {
    const start = pageIndex * itemsByPage;
    return items.slice(start, start + itemsByPage);
  }
}
