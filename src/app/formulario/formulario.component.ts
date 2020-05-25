import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../models/Post.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nuevoPost: any;

  constructor(private postService: PostService) {
    this.nuevoPost = {};
  }

  ngOnInit() {
  }

  async onAddPost() {
    await this.postService.agregarPost(this.nuevoPost);
  }
}


