import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'partnerKeys'
})
export class PartnerKeysPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let tagName = args;
    let keys: any[] = value;
    console.log(keys);

    // let str = ``;
    // keys.forEach((key) => {
    //   if (key.name !== 'notes') {
    //     str += `<${tagName}>`
    //     str += key.name;
    //     str += '<span> (';
    //     str += key.name_full;
    //     str += ')</span>';
    //     str += `</${tagName}>`
    //   }
    // });
    let str = ``;


    keys.forEach((key, index) => {
      if (key.name !== 'notes') {
        str += key.name;
        str += ' (';
        str += key.name_full;

        if (keys.length - 2 <= index) {
          console.log(keys.length - 2, index);
          str += ') ';
        } else {
          console.log(keys.length - 2, index);
          str += '), ';
        }

      }

    });

    return str;
  }

}
