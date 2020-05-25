import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../models/Post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  publicaciones: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    //this.publicaciones = this.postService.getAll();

    this.postService.getAllPost()
      .then(posts => { this.publicaciones = posts })
      .catch(err => console.log(err));
  }

  onChange($event) {
    this.postService.getByCategoria($event.target.value)
      .then(publicacionFil => { this.publicaciones = publicacionFil; })
  }




  /*async ngOnInit()
  {
    try{
    this.publicaciones = await this.postService.getAllPromise();
    }catch (err){console.log(err);}

  }*/

}
