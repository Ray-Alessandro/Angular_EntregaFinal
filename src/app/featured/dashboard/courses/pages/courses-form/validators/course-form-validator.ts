import { Validators } from '@angular/forms';

export const courseFormValidator = {
  title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
  description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
  beginDate: ['', [Validators.required]],
  endDate: ['', [Validators.required]],
  status: ['SCHEDULED', [Validators.required]],
};
