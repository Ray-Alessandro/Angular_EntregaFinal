import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName',
  standalone: false
})
export class FullNamePipe implements PipeTransform {
  transform(firstName: string, lastName: string): string {
    return `${lastName}, ${firstName}`;
  }
}
