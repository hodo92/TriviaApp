import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

interface QuestionsResponse {
  response_code: number;
  results: QuestionModel[];
}

@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }

  getQuestions(options?: { amount?: number, type?: string }): Observable<QuestionModel[]> {
    return this.http
        .get<QuestionsResponse>(`https://opentdb.com/api.php?amount=10&type=multiple`)
      .pipe(
        retry(3),
        catchError(this.handleError),
        map(data => data.results)
      );
  }

  protected handleError(err) {
    console.error(err);
    return Observable.throw(err);
  }
}
