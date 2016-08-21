import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'partnerCategories'
})
export class PartnerCategoriesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let categories = {};
    console.log('Partners ', value);
    if (typeof value === 'undefined' || value === null) {
      return null;
    }
    value.forEach(function (o) {
      let category = o.category;
      categories[category] = categories[category] ? categories[category] : { name: category, partners: [] };
      categories[category].partners.push(o);
    });

    return Object.keys(categories).map(function (key) { return categories[key] });
    // return null;
  }

}
