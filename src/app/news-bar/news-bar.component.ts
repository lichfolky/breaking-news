import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/news.service';

@Component({
  selector: 'app-news-bar',
  templateUrl: './news-bar.component.html',
  styleUrls: ['./news-bar.component.scss'],
})
export class NewsBarComponent implements OnInit {
  news$;
  constructor(private newsService: NewsService) {
    this.news$ = this.newsService.getLastNews(5);
  }

  ngOnInit(): void {}
}
