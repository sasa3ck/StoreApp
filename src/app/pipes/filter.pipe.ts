import { Pipe, PipeTransform } from '@angular/core';
import { fakeStoreApi } from '../components/models/list';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(fakeProducts: fakeStoreApi[], search: string): fakeStoreApi[] {
    if (search.length === 0) return fakeProducts;
    return fakeProducts.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }
}
