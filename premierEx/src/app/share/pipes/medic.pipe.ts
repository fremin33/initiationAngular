import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'medic'
})
export class MedicPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (value === true) {
            return "fa fa-medkit";
        } else {
            return "fa fa-check";
        }
    }

}
