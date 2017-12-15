import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { PostDetailComponent } from './post-detail/post-detail.component'

const routes: Routes = [
	{ path: '', redirectTo: '/search', pathMatch: 'full' },
	{ path: 'search', component: SearchComponent },
	{ path: 'posts/:id', component: PostDetailComponent }
]

@NgModule({

  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
