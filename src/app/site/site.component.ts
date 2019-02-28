import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {

  flag = true;

  name = 'sai';

  website = {
    name: 'google',
    url: 'http://www.google.com',
    logo: 'images/logo.jpg',
    description: 'Learn angular property binding.'
  };

  constructor() {}

  ngOnInit() {}
}
