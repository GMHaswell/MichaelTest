import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  userId: string = "";
  posts: Post[] = [];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  	this.onSearch();
  }

  onSearch() {
  	//If user id entered, search by that id
  	if(this.userId !== "") {
  		this.searchService.getPostsByUserId(+this.userId).subscribe(res => this.posts = res);
    //Otherwise get all posts
  	} else {
  		this.searchService.getPosts().subscribe(res => this.posts = res);
  	}
  }

}
