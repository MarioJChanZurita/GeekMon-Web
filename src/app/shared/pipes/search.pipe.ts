import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], query: string, fields: any[]): any[] {
    if (!query) return items;
    return items.filter((item: any) => {
      return fields
        .map((field: any) =>
          item[field].trim().toLowerCase().includes(query.trim().toLowerCase())
        )
        .some((element: any) => element);
    });
  }
}
