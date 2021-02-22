import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/news.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { map, reduce } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news-bar',
  templateUrl: './news-bar.component.html',
  styleUrls: ['./news-bar.component.scss'],

  animations: [
    trigger('flyInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('1s', style({ opacity: 0 }))]),
    ]),
  ],
})
export class NewsBarComponent implements OnInit {
  news$: Observable<String[]>;
  enabled = -1;

  constructor(private newsService: NewsService) {
    this.news$ = this.newsService.getLastNews(5);
    //.pipe(map((someNews) => someNews.join('; ').split(/(.{6})/)));
  }

  ngOnInit(): void {}

  onInEnd(newsLength: number) {
    console.log('Ended', this.enabled);
    /*
    if (this.enabled < newsLength) {
      this.enabled++;
    } else {
      this.enabled = 0;
    }
    */
  }
}
