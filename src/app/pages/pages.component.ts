import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.sass']
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const title = 'app';
    const selectedValue = '';
    const items = [
      { value: '0', view: 'zero' },
      { value: '1', view: 'one' },
      { value: '2', view: 'Two' }
    ];
  }
}
