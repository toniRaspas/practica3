import { Injectable } from '@angular/core';
import { Post } from './models/Post.model';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[];

  constructor() {
    this.posts = [
      /* new Post('La caca buena', 'cagar es algo bueno y en mi caso yo lo hago mientras como. Esta bien porque la mierda huele bastante rico y ademas puedes orinar mientras lo haces', 'Felipe González', 'https://pbs.twimg.com/profile_images/3016731539/edb05ad95f3c5d9f3caa80238cf69e7c.jpeg', '23/05/2020', 'mierdas'),
       new Post('La caca mala', 'cagar es algo bueno y en mi caso yo lo hago mientras como. Esta bien porque la mierda huele bastante rico y ademas puedes orinar mientras lo haces', 'Felipe González', 'https://pbs.twimg.com/profile_images/3016731539/edb05ad95f3c5d9f3caa80238cf69e7c.jpeg', '23/05/2020', 'cacas')*/
    ];
  }

  /*getAll(): Post[] {
    return this.posts;
  }
*/

  getAllPost(): Promise<Post[]> {
    const prom = new Promise<Post[]>((resolve, reject) => {
      resolve(this.posts)
    });
    return prom;
  }


  getByCategoria(cat: string): Promise<Post[]> {
    return new Promise<Post[]>((resolve, reject) => {
      const arrFiltrado = this.posts.filter(posteo => {
        const categoria = posteo.categoria.toLocaleLowerCase();
        const estaIncluido = categoria.includes(cat.toLocaleLowerCase());
        return estaIncluido;
      });
      resolve(arrFiltrado);
    });
  }

  agregarPost({ titulo, texto, autor, imagen, fecha, categoria }): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      const newPost = new Post(titulo, texto, autor, imagen, fecha, categoria);
      this.posts.push(newPost);
      resolve(this.posts)
    })
  }
}
