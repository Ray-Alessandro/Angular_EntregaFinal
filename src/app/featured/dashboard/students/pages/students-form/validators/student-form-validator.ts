import { Validators } from '@angular/forms';

export const studentFormValidator = {
  firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
  lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
  age: ['', [Validators.required, Validators.min(10), Validators.maxLength(80)]],
};