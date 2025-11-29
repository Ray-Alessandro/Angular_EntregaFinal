/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';
import { FontSizeDirective } from './font-size.directive';

describe('Directive: FontSize', () => {
  it('should create an instance', () => {
    const mockElementRef = { nativeElement: document.createElement('div') } as ElementRef;
    const directive = new FontSizeDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
