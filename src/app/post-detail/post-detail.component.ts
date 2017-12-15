import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Post } from '../post';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post: Post;

  constructor( private route: ActivatedRoute,
    		   private searchService: SearchService,
    		   private location: Location) { }

  ngOnInit() {
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.searchService.getPostById(id).subscribe(res => this.post = res);
  }

  goBack(): void {
  	this.location.back();
  }

}
