import { Pipe, PipeTransform } from '@angular/core';
import { IProducts } from 'src/app/models/product';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(product: IProducts[], field: string): IProducts[] {
    if (!Array.isArray(product)) {
      return [];
    }
    product.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    return product;
  }
  }




