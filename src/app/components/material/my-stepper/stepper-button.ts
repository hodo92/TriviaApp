/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Directive} from '@angular/core';
import {CdkStepper, CdkStepperNext, CdkStepperPrevious} from '@angular/cdk/stepper';
import {MatStepper} from './stepper';

/** Button that moves to the next step in a stepper workflow. */
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'button[matStepperNext]',
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '(click)': '_stepper.next()',
    '[type]': 'type',
  },
  // tslint:disable-next-line:use-input-property-decorator
  inputs: ['type'],
  providers: [{provide: CdkStepper, useExisting: MatStepper}]
})
// tslint:disable-next-line:directive-class-suffix
export class MatStepperNext extends CdkStepperNext {}

/** Button that moves to the previous step in a stepper workflow. */
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'button[matStepperPrevious]',
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '(click)': '_stepper.previous()',
    '[type]': 'type',
  },
  // tslint:disable-next-line:use-input-property-decorator
  inputs: ['type'],
  providers: [{provide: CdkStepper, useExisting: MatStepper}]
})
// tslint:disable-next-line:directive-class-suffix
export class MatStepperPrevious extends CdkStepperPrevious {}
