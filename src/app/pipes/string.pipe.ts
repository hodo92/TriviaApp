import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'fixQuotes'
})
export class FixQuotesPipe implements PipeTransform {
  transform(value: String): string {
    if (!value || !value.length) {
      return '';
    }

    return value.replace(/&#039;/g, '\'').replace(/&quot;/g, '\"');
  }
}
