import { Pipe, PipeTransform } from '@angular/core';
import { Iimage } from 'src/assets/interfaces/image';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(itemsArr: Iimage[], searchKeywords: string): Iimage[] | [] {
    if (!itemsArr || !searchKeywords) {
      return !itemsArr ? [] : itemsArr;
    }
    const arr = itemsArr.filter(
      (_item) =>
        Object.keys(_item).findIndex((_key) => {
          return _item[_key as keyof Iimage].includes(searchKeywords);
        }) !== -1
    );
    return arr;
  }
  // return [];
}
