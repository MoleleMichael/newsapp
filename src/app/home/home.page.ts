import { Component, OnInit } from '@angular/core';
import { NewsfeedService } from '../newsfeed.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  articles: any=[];
  constructor(private newsService: NewsfeedService) {}

  ngOnInit() {
    this.loadNews();
  }

  loadNews() {
    this.newsService.getNews("top-headlines?country=us").subscribe(news => {
      this.articles = news['articles'];
      console.log(this.articles);
    })
  }
}
