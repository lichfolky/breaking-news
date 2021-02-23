import { Injectable } from '@angular/core';
import { merge, of, ReplaySubject, Subject, timer } from 'rxjs';
import { map, takeLast } from 'rxjs/operators';
import { getRandomIntInclusive } from './random.utils';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  timerFirst = 100;
  timerInterval = 1000;
  newsCount = 0;
  newsNumber = 5;
  lastNews: Subject<string>;

  constructor() {
    this.lastNews = new Subject();

    timer(this.timerFirst, this.timerInterval).subscribe(() =>
      this.lastNews.next(this.generateNews())
    );
  }

  getLastNews() {
    return this.lastNews;
  }

  private generateNews(): string {
    this.newsCount++;
    return 'Breaking news [' + this.newsCount + ']';
  }
}
