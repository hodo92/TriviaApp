import { DataService } from './../../services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  readonly isStepperLinear = true;
  questions: QuestionModel[];
  @ViewChild('stepper') stepper: MatStepper;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getQuestions().subscribe(res => {
      this.questions = res;
    });
  }

  /**
   * @param questionNum of current question.
   */
  continueClicked(questionNum: number): void {
    this.stepper.next();
  }

  restart(): void {
    this.ngOnInit();
  }
}
