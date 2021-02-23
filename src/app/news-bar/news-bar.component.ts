import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/news.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { chunkString } from '../shared/random.utils';

@Component({
  selector: 'app-news-bar',
  templateUrl: './news-bar.component.html',
  styleUrls: ['./news-bar.component.scss'],

  animations: [
    trigger('flyInOut', [
      transition(':enter', [
        style({ opacity: 1}),
        animate('6s', style({ transform: 'translateX(-100%)' })),
      ]),
      transition(':leave', [animate('100ms', style({ opacity: 0 }))]),
    ]),
  ],
})

export class NewsBarComponent implements OnInit {
  enabled = -1;
  queueSize = 4;
  newsQueue: string[] = [];
  tokenizedQueue : string[] = [];

  newsSubject = this.newsService.getLastNews();
  newsSubscription: Subscription = this.newsSubject.subscribe((news) => {
    if (this.newsQueue.length < this.queueSize) {
      this.newsQueue.push(news);
    } else {
      this.newsQueue = [...this.newsQueue.slice(1, this.queueSize), news];
    }
    const allNews = this.newsQueue.join(", ")
    this.tokenizedQueue = chunkString(allNews, 100);
  });

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
  }

  captureDoneEvent(event: any) {
    console.log('Ended', event);
    if (event.fromState === 'void'){
      this.enabled++
    }
  }

  captureStartEvent(event: any) {
    console.log('Start', event);
    if (event.fromState === 'void'){this.enabled++}
  }
}
