import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../post';

@Component({
  selector: 'app-post-results',
  templateUrl: './post-results.component.html',
  styleUrls: ['./post-results.component.css']
})
export class PostResultsComponent implements OnInit {

  @Input()
  posts: Post[];

  constructor() { }

  ngOnInit() {
  }

}
