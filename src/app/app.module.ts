import { ArrayService } from './services/array.service';
import { FixQuotesPipe } from './pipes/string.pipe';
import { DataService } from './services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AnswerComponent } from './components/answer/answer.component';
import { QuestionComponent } from './components/question/question.component';
import { GameComponent } from './components/game/game.component';
import { MatCardModule, MatInputModule,
    MatButtonModule, MatButtonToggleModule, MatGridListModule, MatToolbarModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatStepperModule } from './components/material/my-stepper/stepper-module';

@NgModule({
  declarations: [
    AppComponent,
    AnswerComponent,
    QuestionComponent,
    GameComponent,
    FixQuotesPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
  ],
  providers: [DataService, ArrayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
