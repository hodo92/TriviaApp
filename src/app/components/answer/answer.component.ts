import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  
  @Input() text: string;
  @Input() num: number;
  @Output() clicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  result: boolean = undefined;
  isSelected = false;
  isSelectable = true;

  constructor() {
  }

  ngOnInit(): void {}

  onClick(event): void {
    this.isSelected = true;
    this.clicked.emit(this.isSelected);
  }

  clearSelection(): void {
    this.isSelected = false;
  }

  

  calcStyle(): any {
    const style = {
      'padding-right': '24px'
    };
    if (this.isSelected) {
      style['border'] = '3px solid #3f51b5';
    }
    if (!this.isSelectable) {
      style['pointer-events'] = 'none';
    }
    if (this.result === true) {
      style['border'] = '3px solid green';
    } else if (this.result === false) {
      style['border'] = '3px solid red';
    }
    return style;
  }

  /**
   * @param correct correct answer string
   */

  processResult(correct: string): boolean {
    this.result = this.text === correct;
    return this.result;
  }

  mute(isMuted: boolean): void {
    this.isSelectable = !isMuted;
  }
}
