import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  title = 'Latest News';
  city = 'Varanasi';

  primeMinister = {
    name: {
      fname : 'Narendra',
      lname : 'Modi'
    },
      gender : 'M'
  };


  constructor() { }

  ngOnInit() {
  }

}
