import { ArrayService } from './../../services/array.service';
import { Component, OnInit, Input, ViewChildren, QueryList, Output, EventEmitter } from '@angular/core';
import { AnswerComponent } from '../answer/answer.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
 
  @Input() question: QuestionModel;
  @Input() num: number;
  @Output() next: EventEmitter<any> = new EventEmitter();
  @Output() restart: EventEmitter<any> = new EventEmitter();
  ans: string[];
  @ViewChildren(AnswerComponent) answers: QueryList<AnswerComponent>;

  isCheckable = false;
  isSubmitted = false;
  isCorrect: boolean = undefined;
  submittedAnswer: number;

  constructor(private arrays: ArrayService) { }

  ngOnInit(): void {
    this.ans = this.arrays.shuffle([this.question.correct_answer, ...this.question.incorrect_answers]);
  }

  /**
   * @param event
   * @param i number of answer.
   */

  answerClicked(event, i): void {
    const a = this.answers.toArray();

    for (let j = 0; j < a.length; j++) {
      if (i !== j) {
        a[j].clearSelection();
      }
    }

    this.isCheckable = true;
    this.submittedAnswer = i;
  }

  buttonClicked(): void {
    if (this.isSubmitted) { 
      (this.isCorrect ? this.next : this.restart).emit();
    }

    if (this.isCheckable && !this.isSubmitted) {
      this.isSubmitted = true;
      this.answers.forEach(a => a.mute(true));
      this.isCorrect = this.checkAnswer();
    }
  }

  checkAnswer(): boolean {
    return this.answers.toArray()[this.submittedAnswer].processResult(this.question.correct_answer);
  }

  determineButtonText(): string {
    return !this.isSubmitted ? 'OK' : this.isCorrect ? 'CONTINUE' : 'RESTART';
  }
}
