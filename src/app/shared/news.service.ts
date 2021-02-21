import { Injectable } from '@angular/core';
import { merge, of, timer } from 'rxjs';
import { map, takeLast } from 'rxjs/operators';
import { getRandomIntInclusive } from './random.utils';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  newsCount = 0;

  constructor() {}

  getLastNews(newsNumber: number) {
    return timer(1000, 3000).pipe(map(() => this.generateNews(newsNumber)));
  }

  private generateNews(newsNumber: number): string[] {
    let oldNewsNumber = getRandomIntInclusive(0, newsNumber);
    if (oldNewsNumber > this.newsCount) {
      oldNewsNumber = this.newsCount;
    }
    let news = [];
    for (let nOld = 0; nOld < oldNewsNumber; nOld++) {
      news.push('Old news ' + (this.newsCount - oldNewsNumber + 1 + nOld));
    }
    for (let nNew = 0; nNew < newsNumber - oldNewsNumber; nNew++) {
      this.newsCount++;
      news.push('New news ' + this.newsCount);
    }
    return news;
  }
}
